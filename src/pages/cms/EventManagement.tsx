import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { 
  ArrowLeft, 
  Users, 
  MapPin, 
  Calendar, 
  DollarSign, 
  Settings,
  BarChart3,
  QrCode,
  Armchair,
  Save,
  Eye,
  UserCheck,
  Clock,
  TrendingUp
} from 'lucide-react';
import { EventAnalytics } from '@/components/events/EventAnalytics';
import { QRCodeCheckIn } from '@/components/events/QRCodeCheckIn';
import { SeatingChartManager } from '@/components/events/SeatingChartManager';

interface EventData {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  capacity: number;
  price: number;
  registration_open: boolean;
  requires_approval: boolean;
  category: string;
  image_url: string;
  organizer_email: string;
  created_at: string;
  updated_at: string;
}

interface RegistrationStats {
  total: number;
  confirmed: number;
  checked_in: number;
  waitlisted: number;
}

export const EventManagement: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const navigate = useNavigate();
  const [event, setEvent] = useState<EventData | null>(null);
  const [registrationStats, setRegistrationStats] = useState<RegistrationStats>({
    total: 0,
    confirmed: 0,
    checked_in: 0,
    waitlisted: 0
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    if (eventId) {
      fetchEventData();
      fetchRegistrationStats();
    }
  }, [eventId]);

  const fetchEventData = async () => {
    try {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .eq('id', eventId)
        .single();

      if (error) throw error;
      setEvent(data);
    } catch (error) {
      console.error('Error fetching event:', error);
      toast.error('Failed to load event data');
    } finally {
      setLoading(false);
    }
  };

  const fetchRegistrationStats = async () => {
    try {
      const { data, error } = await supabase
        .from('event_registrations')
        .select('registration_status, checked_in, waitlisted')
        .eq('event_id', eventId);

      if (error) throw error;

      const stats = data.reduce((acc, reg) => {
        acc.total++;
        if (reg.registration_status === 'confirmed') acc.confirmed++;
        if (reg.checked_in) acc.checked_in++;
        if (reg.waitlisted) acc.waitlisted++;
        return acc;
      }, { total: 0, confirmed: 0, checked_in: 0, waitlisted: 0 });

      setRegistrationStats(stats);
    } catch (error) {
      console.error('Error fetching registration stats:', error);
    }
  };

  const handleSaveEvent = async () => {
    if (!event) return;

    setSaving(true);
    try {
      const { error } = await supabase
        .from('events')
        .update({
          title: event.title,
          description: event.description,
          date: event.date,
          time: event.time,
          location: event.location,
          capacity: event.capacity,
          price: event.price,
          registration_open: event.registration_open,
          requires_approval: event.requires_approval,
          category: event.category,
          organizer_email: event.organizer_email,
          updated_at: new Date().toISOString()
        })
        .eq('id', eventId);

      if (error) throw error;
      toast.success('Event updated successfully');
    } catch (error) {
      console.error('Error updating event:', error);
      toast.error('Failed to update event');
    } finally {
      setSaving(false);
    }
  };

  const updateEventField = (field: keyof EventData, value: any) => {
    if (event) {
      setEvent({ ...event, [field]: value });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center">
        <Card className="bg-background-dark/80 backdrop-blur-md border border-white/10">
          <CardContent className="p-8 text-center">
            <h2 className="text-xl font-semibold text-foreground-white mb-2">Event Not Found</h2>
            <p className="text-foreground-white/60 mb-4">The requested event could not be found.</p>
            <Button onClick={() => navigate('/cms/dashboard')}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const attendanceRate = registrationStats.confirmed > 0 
    ? Math.round((registrationStats.checked_in / registrationStats.confirmed) * 100) 
    : 0;

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <div className="bg-background-dark/95 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => navigate('/cms/dashboard')}
                className="text-foreground-white hover:bg-brand-primary/20"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-foreground-white">{event.title}</h1>
                <p className="text-sm text-foreground-white/60">
                  {new Date(event.date).toLocaleDateString()} • {event.location}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant={event.registration_open ? 'default' : 'secondary'}>
                {event.registration_open ? 'Registration Open' : 'Registration Closed'}
              </Badge>
              <Button onClick={handleSaveEvent} disabled={saving}>
                <Save className="h-4 w-4 mr-2" />
                {saving ? 'Saving...' : 'Save Changes'}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-background-dark/80 backdrop-blur-md border border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-foreground-white/60">Total Registrations</p>
                  <p className="text-2xl font-bold text-foreground-white">{registrationStats.total}</p>
                </div>
                <Users className="h-8 w-8 text-brand-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-background-dark/80 backdrop-blur-md border border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-foreground-white/60">Confirmed</p>
                  <p className="text-2xl font-bold text-foreground-white">{registrationStats.confirmed}</p>
                </div>
                <UserCheck className="h-8 w-8 text-brand-secondary" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-background-dark/80 backdrop-blur-md border border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-foreground-white/60">Checked In</p>
                  <p className="text-2xl font-bold text-foreground-white">{registrationStats.checked_in}</p>
                </div>
                <QrCode className="h-8 w-8 text-brand-accent" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-background-dark/80 backdrop-blur-md border border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-foreground-white/60">Attendance Rate</p>
                  <p className="text-2xl font-bold text-foreground-white">{attendanceRate}%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-brand-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-6 bg-background-dark/50 backdrop-blur-md border border-white/10">
            <TabsTrigger value="overview" className="text-foreground-white data-[state=active]:bg-brand-primary">
              <Eye className="h-4 w-4 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="settings" className="text-foreground-white data-[state=active]:bg-brand-primary">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </TabsTrigger>
            <TabsTrigger value="registrations" className="text-foreground-white data-[state=active]:bg-brand-primary">
              <Users className="h-4 w-4 mr-2" />
              Registrations
            </TabsTrigger>
            <TabsTrigger value="checkin" className="text-foreground-white data-[state=active]:bg-brand-primary">
              <QrCode className="h-4 w-4 mr-2" />
              Check-in
            </TabsTrigger>
            <TabsTrigger value="seating" className="text-foreground-white data-[state=active]:bg-brand-primary">
              <Armchair className="h-4 w-4 mr-2" />
              Seating
            </TabsTrigger>
            <TabsTrigger value="analytics" className="text-foreground-white data-[state=active]:bg-brand-primary">
              <BarChart3 className="h-4 w-4 mr-2" />
              Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card className="bg-background-dark/80 backdrop-blur-md border border-white/10">
              <CardHeader>
                <CardTitle className="text-foreground-white">Event Overview</CardTitle>
                <CardDescription className="text-foreground-white/60">
                  Quick overview of your event status and key metrics
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-brand-primary" />
                      <div>
                        <p className="text-sm text-foreground-white/60">Date & Time</p>
                        <p className="text-foreground-white">
                          {new Date(event.date).toLocaleDateString()} at {event.time}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-brand-primary" />
                      <div>
                        <p className="text-sm text-foreground-white/60">Location</p>
                        <p className="text-foreground-white">{event.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-brand-primary" />
                      <div>
                        <p className="text-sm text-foreground-white/60">Capacity</p>
                        <p className="text-foreground-white">{event.capacity} attendees</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <DollarSign className="h-5 w-5 text-brand-primary" />
                      <div>
                        <p className="text-sm text-foreground-white/60">Price</p>
                        <p className="text-foreground-white">${event.price}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-brand-primary" />
                      <div>
                        <p className="text-sm text-foreground-white/60">Last Updated</p>
                        <p className="text-foreground-white">
                          {new Date(event.updated_at).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {event.description && (
                  <div className="mt-6">
                    <p className="text-sm text-foreground-white/60 mb-2">Description</p>
                    <p className="text-foreground-white">{event.description}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card className="bg-background-dark/80 backdrop-blur-md border border-white/10">
              <CardHeader>
                <CardTitle className="text-foreground-white">Event Settings</CardTitle>
                <CardDescription className="text-foreground-white/60">
                  Configure your event details and registration settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="title" className="text-foreground-white">Event Title</Label>
                      <Input
                        id="title"
                        value={event.title}
                        onChange={(e) => updateEventField('title', e.target.value)}
                        className="bg-background-dark/50 border-white/20 text-foreground-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="date" className="text-foreground-white">Date</Label>
                      <Input
                        id="date"
                        type="date"
                        value={event.date}
                        onChange={(e) => updateEventField('date', e.target.value)}
                        className="bg-background-dark/50 border-white/20 text-foreground-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="time" className="text-foreground-white">Time</Label>
                      <Input
                        id="time"
                        type="time"
                        value={event.time}
                        onChange={(e) => updateEventField('time', e.target.value)}
                        className="bg-background-dark/50 border-white/20 text-foreground-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="location" className="text-foreground-white">Location</Label>
                      <Input
                        id="location"
                        value={event.location}
                        onChange={(e) => updateEventField('location', e.target.value)}
                        className="bg-background-dark/50 border-white/20 text-foreground-white"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="capacity" className="text-foreground-white">Capacity</Label>
                      <Input
                        id="capacity"
                        type="number"
                        value={event.capacity}
                        onChange={(e) => updateEventField('capacity', parseInt(e.target.value))}
                        className="bg-background-dark/50 border-white/20 text-foreground-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="price" className="text-foreground-white">Price ($)</Label>
                      <Input
                        id="price"
                        type="number"
                        step="0.01"
                        value={event.price}
                        onChange={(e) => updateEventField('price', parseFloat(e.target.value))}
                        className="bg-background-dark/50 border-white/20 text-foreground-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="category" className="text-foreground-white">Category</Label>
                      <Input
                        id="category"
                        value={event.category || ''}
                        onChange={(e) => updateEventField('category', e.target.value)}
                        className="bg-background-dark/50 border-white/20 text-foreground-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="organizer_email" className="text-foreground-white">Organizer Email</Label>
                      <Input
                        id="organizer_email"
                        type="email"
                        value={event.organizer_email || ''}
                        onChange={(e) => updateEventField('organizer_email', e.target.value)}
                        className="bg-background-dark/50 border-white/20 text-foreground-white"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <Label htmlFor="description" className="text-foreground-white">Description</Label>
                  <Textarea
                    id="description"
                    value={event.description || ''}
                    onChange={(e) => updateEventField('description', e.target.value)}
                    rows={4}
                    className="bg-background-dark/50 border-white/20 text-foreground-white"
                  />
                </div>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="registration_open"
                      checked={event.registration_open}
                      onCheckedChange={(checked) => updateEventField('registration_open', checked)}
                    />
                    <Label htmlFor="registration_open" className="text-foreground-white">
                      Registration Open
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="requires_approval"
                      checked={event.requires_approval}
                      onCheckedChange={(checked) => updateEventField('requires_approval', checked)}
                    />
                    <Label htmlFor="requires_approval" className="text-foreground-white">
                      Requires Approval
                    </Label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="registrations" className="space-y-6">
            <Card className="bg-background-dark/80 backdrop-blur-md border border-white/10">
              <CardHeader>
                <CardTitle className="text-foreground-white">Registration Management</CardTitle>
                <CardDescription className="text-foreground-white/60">
                  View and manage event registrations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground-white/60">Registration management interface coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="checkin" className="space-y-6">
            <QRCodeCheckIn eventId={eventId!} />
          </TabsContent>

          <TabsContent value="seating" className="space-y-6">
            <SeatingChartManager eventId={eventId!} />
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <EventAnalytics eventId={eventId!} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};