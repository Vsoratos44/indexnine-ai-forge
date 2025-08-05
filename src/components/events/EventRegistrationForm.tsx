import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Loader2, CreditCard, Ticket, Users, AlertCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  price: number;
  capacity: number;
  category: string;
}

interface RegistrationFormProps {
  event: Event;
  onRegistrationComplete: (registrationId: string, qrCode: string) => void;
  onClose: () => void;
}

export function EventRegistrationForm({ event, onRegistrationComplete, onClose }: RegistrationFormProps) {
  const [loading, setLoading] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [promoDiscount, setPromoDiscount] = useState<{ type: string; value: number; valid: boolean } | null>(null);
  const [currentPrice, setCurrentPrice] = useState(event.price);
  const [registeredCount, setRegisteredCount] = useState(0);
  const [isWaitlisted, setIsWaitlisted] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    attendee_name: '',
    attendee_email: '',
    phone: '',
    company_name: '',
    job_title: '',
    industry: '',
    special_requirements: '',
    dietary_restrictions: '',
    referral_source: '',
    marketing_consent: false
  });

  // Check event capacity and current registrations
  useEffect(() => {
    checkEventCapacity();
  }, [event.id]);

  const checkEventCapacity = async () => {
    try {
      const { data, error } = await supabase
        .from('event_registrations')
        .select('id')
        .eq('event_id', event.id)
        .eq('registration_status', 'confirmed');

      if (error) throw error;
      
      const count = data?.length || 0;
      setRegisteredCount(count);
      setIsWaitlisted(count >= event.capacity);
    } catch (error) {
      console.error('Error checking capacity:', error);
    }
  };

  const validatePromoCode = async () => {
    if (!promoCode.trim()) {
      setPromoDiscount(null);
      setCurrentPrice(event.price);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('promo_codes')
        .select('*')
        .eq('event_id', event.id)
        .eq('code', promoCode.toUpperCase())
        .eq('active', true)
        .single();

      if (error || !data) {
        setPromoDiscount({ type: 'invalid', value: 0, valid: false });
        setCurrentPrice(event.price);
        return;
      }

      // Check if promo code is still valid
      const now = new Date();
      const validFrom = data.valid_from ? new Date(data.valid_from) : null;
      const validUntil = data.valid_until ? new Date(data.valid_until) : null;

      if ((validFrom && now < validFrom) || (validUntil && now > validUntil)) {
        setPromoDiscount({ type: 'expired', value: 0, valid: false });
        setCurrentPrice(event.price);
        return;
      }

      if (data.usage_limit && data.used_count >= data.usage_limit) {
        setPromoDiscount({ type: 'limit_reached', value: 0, valid: false });
        setCurrentPrice(event.price);
        return;
      }

      let newPrice = event.price;
      if (data.discount_type === 'free') {
        newPrice = 0;
      } else if (data.discount_type === 'percentage') {
        newPrice = event.price * (1 - data.discount_value / 100);
      } else if (data.discount_type === 'fixed') {
        newPrice = Math.max(0, event.price - data.discount_value);
      }

      setPromoDiscount({ type: data.discount_type, value: data.discount_value, valid: true });
      setCurrentPrice(newPrice);
    } catch (error) {
      console.error('Error validating promo code:', error);
      setPromoDiscount({ type: 'error', value: 0, valid: false });
    }
  };

  const generateQRCode = (registrationId: string) => {
    // Generate a QR code data string
    const qrData = {
      eventId: event.id,
      registrationId,
      eventTitle: event.title,
      attendeeEmail: formData.attendee_email,
      attendeeName: formData.attendee_name,
      eventDate: event.date,
      eventTime: event.time,
      eventLocation: event.location
    };
    
    return btoa(JSON.stringify(qrData));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Check if user is already registered
      const { data: existingRegistration } = await supabase
        .from('event_registrations')
        .select('id')
        .eq('event_id', event.id)
        .eq('attendee_email', formData.attendee_email)
        .single();

      if (existingRegistration) {
        toast({
          title: "Already Registered",
          description: "You are already registered for this event.",
          variant: "destructive"
        });
        setLoading(false);
        return;
      }

      // Create registration
      const registrationData = {
        event_id: event.id,
        ...formData,
        promo_code: promoCode || null,
        amount_paid: currentPrice,
        payment_status: currentPrice > 0 ? 'pending' : 'completed',
        registration_status: isWaitlisted ? 'waitlisted' : 'confirmed',
        waitlisted: isWaitlisted,
        waitlist_position: isWaitlisted ? registeredCount + 1 : null,
        registration_data: {
          special_requirements: formData.special_requirements,
          dietary_restrictions: formData.dietary_restrictions,
          referral_source: formData.referral_source,
          marketing_consent: formData.marketing_consent
        }
      };

      const { data: registration, error } = await supabase
        .from('event_registrations')
        .insert(registrationData)
        .select()
        .single();

      if (error) throw error;

      // Generate QR code
      const qrCode = generateQRCode(registration.id);

      // Update registration with QR code
      await supabase
        .from('event_registrations')
        .update({ qr_code: qrCode })
        .eq('id', registration.id);

      // Update promo code usage if applicable (we'll skip this for now)
      // In production, you'd want to handle this atomically
      if (promoCode && promoDiscount?.valid) {
        // Get current usage and increment
        const { data: currentPromo } = await supabase
          .from('promo_codes')
          .select('used_count')
          .eq('event_id', event.id)
          .eq('code', promoCode.toUpperCase())
          .single();
          
        if (currentPromo) {
          await supabase
            .from('promo_codes')
            .update({ used_count: currentPromo.used_count + 1 })
            .eq('event_id', event.id)
            .eq('code', promoCode.toUpperCase());
        }
      }

      // Add to activities/leads table for tracking
      await supabase.from('activities').insert({
        type: 'event_registration',
        source: 'website',
        activity_data: {
          event_id: event.id,
          event_title: event.title,
          registration_id: registration.id,
          amount_paid: currentPrice,
          waitlisted: isWaitlisted
        }
      });

      // Add lead data
      await supabase.from('leads').insert({
        email: formData.attendee_email,
        first_name: formData.attendee_name.split(' ')[0],
        last_name: formData.attendee_name.split(' ').slice(1).join(' '),
        company_name: formData.company_name,
        job_title: formData.job_title,
        industry: formData.industry,
        lead_source: 'event_registration',
        status: 'new',
        notes: `Registered for ${event.title}`
      });

      if (currentPrice > 0 && !isWaitlisted) {
        // For paid events, redirect to payment
        toast({
          title: "Registration Initiated",
          description: "Please complete payment to confirm your registration.",
        });
        // Here you would integrate with Stripe or payment processor
        // For now, we'll simulate successful payment
        setTimeout(() => {
          onRegistrationComplete(registration.id, qrCode);
        }, 2000);
      } else {
        toast({
          title: isWaitlisted ? "Added to Waitlist" : "Registration Successful",
          description: isWaitlisted 
            ? `You've been added to the waitlist at position ${registeredCount + 1}.`
            : "You've successfully registered for the event!"
        });
        onRegistrationComplete(registration.id, qrCode);
      }

    } catch (error: any) {
      console.error('Registration error:', error);
      toast({
        title: "Registration Failed",
        description: error.message || "An error occurred during registration.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: keyof typeof formData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Ticket className="h-5 w-5" />
          {isWaitlisted ? 'Join Waitlist' : 'Register for Event'}
        </CardTitle>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            {registeredCount}/{event.capacity} registered
          </div>
          {isWaitlisted && (
            <Badge variant="secondary" className="flex items-center gap-1">
              <AlertCircle className="h-3 w-3" />
              Event Full - Waitlist Only
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="space-y-4">
            <h3 className="font-semibold">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="attendee_name">Full Name *</Label>
                <Input
                  id="attendee_name"
                  value={formData.attendee_name}
                  onChange={(e) => handleInputChange('attendee_name', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="attendee_email">Email Address *</Label>
                <Input
                  id="attendee_email"
                  type="email"
                  value={formData.attendee_email}
                  onChange={(e) => handleInputChange('attendee_email', e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
              />
            </div>
          </div>

          {/* Professional Information */}
          <div className="space-y-4">
            <h3 className="font-semibold">Professional Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="company_name">Company Name</Label>
                <Input
                  id="company_name"
                  value={formData.company_name}
                  onChange={(e) => handleInputChange('company_name', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="job_title">Job Title</Label>
                <Input
                  id="job_title"
                  value={formData.job_title}
                  onChange={(e) => handleInputChange('job_title', e.target.value)}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="industry">Industry</Label>
              <Select value={formData.industry} onValueChange={(value) => handleInputChange('industry', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="manufacturing">Manufacturing</SelectItem>
                  <SelectItem value="retail">Retail</SelectItem>
                  <SelectItem value="consulting">Consulting</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-4">
            <h3 className="font-semibold">Additional Information</h3>
            <div>
              <Label htmlFor="special_requirements">Special Requirements</Label>
              <Textarea
                id="special_requirements"
                value={formData.special_requirements}
                onChange={(e) => handleInputChange('special_requirements', e.target.value)}
                placeholder="Any accessibility needs or special requirements..."
              />
            </div>
            <div>
              <Label htmlFor="dietary_restrictions">Dietary Restrictions</Label>
              <Input
                id="dietary_restrictions"
                value={formData.dietary_restrictions}
                onChange={(e) => handleInputChange('dietary_restrictions', e.target.value)}
                placeholder="Any dietary restrictions or allergies..."
              />
            </div>
            <div>
              <Label htmlFor="referral_source">How did you hear about this event?</Label>
              <Select value={formData.referral_source} onValueChange={(value) => handleInputChange('referral_source', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select referral source" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="website">Our Website</SelectItem>
                  <SelectItem value="social_media">Social Media</SelectItem>
                  <SelectItem value="email">Email Newsletter</SelectItem>
                  <SelectItem value="colleague">Colleague/Friend</SelectItem>
                  <SelectItem value="google">Google Search</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Promo Code Section */}
          {event.price > 0 && (
            <div className="space-y-4">
              <h3 className="font-semibold">Promo Code</h3>
              <div className="flex gap-2">
                <Input
                  placeholder="Enter promo code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                />
                <Button type="button" variant="outline" onClick={validatePromoCode}>
                  Apply
                </Button>
              </div>
              {promoDiscount && !promoDiscount.valid && (
                <p className="text-sm text-destructive">
                  {promoDiscount.type === 'invalid' && 'Invalid promo code'}
                  {promoDiscount.type === 'expired' && 'Promo code has expired'}
                  {promoDiscount.type === 'limit_reached' && 'Promo code usage limit reached'}
                  {promoDiscount.type === 'error' && 'Error validating promo code'}
                </p>
              )}
              {promoDiscount && promoDiscount.valid && (
                <p className="text-sm text-green-600">
                  Promo code applied! 
                  {promoDiscount.type === 'free' && ' Event is now free!'}
                  {promoDiscount.type === 'percentage' && ` ${promoDiscount.value}% discount applied`}
                  {promoDiscount.type === 'fixed' && ` $${promoDiscount.value} discount applied`}
                </p>
              )}
            </div>
          )}

          {/* Price Summary */}
          {event.price > 0 && (
            <div className="bg-secondary p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <span>Registration Fee:</span>
                <div className="text-right">
                  {currentPrice !== event.price && (
                    <span className="line-through text-muted-foreground mr-2">
                      ${event.price.toFixed(2)}
                    </span>
                  )}
                  <span className="font-semibold">
                    ${currentPrice.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Marketing Consent */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="marketing_consent"
              checked={formData.marketing_consent}
              onChange={(e) => handleInputChange('marketing_consent', e.target.checked)}
              className="rounded"
            />
            <Label htmlFor="marketing_consent" className="text-sm">
              I agree to receive marketing communications about future events and services
            </Label>
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" disabled={loading} className="flex-1">
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
              ) : currentPrice > 0 && !isWaitlisted ? (
                <CreditCard className="h-4 w-4 mr-2" />
              ) : (
                <Ticket className="h-4 w-4 mr-2" />
              )}
              {loading 
                ? 'Processing...' 
                : isWaitlisted
                  ? 'Join Waitlist'
                  : currentPrice > 0
                    ? `Register & Pay $${currentPrice.toFixed(2)}`
                    : 'Register for Free'
              }
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}