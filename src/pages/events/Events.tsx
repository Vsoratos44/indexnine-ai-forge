import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Clock, Users, DollarSign, Search, Ticket, Star, AlertCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LivingVoidBackground from '@/components/LivingVoidBackground';
import { EventRegistrationForm } from '@/components/events/EventRegistrationForm';
import { EventTicket } from '@/components/events/EventTicket';
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
  image_url?: string;
  registration_open: boolean;
  requires_approval: boolean;
}

interface Registration {
  id: string;
  attendee_name: string;
  attendee_email: string;
  phone?: string;
  company_name?: string;
  job_title?: string;
  qr_code: string;
  registration_status: string;
  amount_paid: number;
  created_at: string;
}

const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState('All');
  const [loading, setLoading] = useState(true);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [showTicket, setShowTicket] = useState(false);
  const [currentRegistration, setCurrentRegistration] = useState<Registration | null>(null);
  const [registrationCounts, setRegistrationCounts] = useState<Record<string, number>>({});
  const { toast } = useToast();

  // Fetch events from Supabase
  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .eq('registration_open', true)
        .order('date', { ascending: true });

      if (error) throw error;

      if (data) {
        setEvents(data);
        if (data.length > 0 && !selectedEvent) {
          setSelectedEvent(data[0]);
        }
        
        // Fetch registration counts for each event
        const counts: Record<string, number> = {};
        for (const event of data) {
          const { data: registrations } = await supabase
            .from('event_registrations')
            .select('id')
            .eq('event_id', event.id)
            .eq('registration_status', 'confirmed');
          counts[event.id] = registrations?.length || 0;
        }
        setRegistrationCounts(counts);
      }
    } catch (error) {
      console.error('Error fetching events:', error);
      toast({
        title: "Error",
        description: "Failed to load events. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const categories = ['All', 'Technology', 'Workshop', 'Business', 'Startup'];
  const priceFilters = ['All', 'Free', 'Paid'];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    const matchesPrice = selectedPrice === 'All' || 
                        (selectedPrice === 'Free' && event.price === 0) ||
                        (selectedPrice === 'Paid' && event.price > 0);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const handleRegister = (event: Event) => {
    setSelectedEvent(event);
    setShowRegistrationForm(true);
  };

  const handleRegistrationComplete = (registrationId: string, qrCode: string) => {
    if (selectedEvent) {
      const registration: Registration = {
        id: registrationId,
        attendee_name: 'User', // This would come from the form
        attendee_email: 'user@example.com', // This would come from the form
        qr_code: qrCode,
        registration_status: 'confirmed',
        amount_paid: selectedEvent.price,
        created_at: new Date().toISOString()
      };
      
      setCurrentRegistration(registration);
      setShowRegistrationForm(false);
      setShowTicket(true);
      
      // Refresh registration counts
      fetchEvents();
    }
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (timeStr: string) => {
    return new Date(`2000-01-01T${timeStr}`).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const getEventStatus = (event: Event) => {
    const registeredCount = registrationCounts[event.id] || 0;
    const capacity = event.capacity;
    
    if (registeredCount >= capacity) return { text: 'Event Full', variant: 'destructive' as const };
    if (registeredCount >= capacity * 0.9) return { text: 'Almost Full', variant: 'secondary' as const };
    if (registeredCount >= capacity * 0.5) return { text: 'Filling Up', variant: 'default' as const };
    return { text: 'Registration Open', variant: 'outline' as const };
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background relative overflow-hidden">
        <LivingVoidBackground />
        <Header />
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-foreground">Loading events...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <LivingVoidBackground />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground font-montserrat">
              IndexNine Events
            </h1>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto font-montserrat">
              Join us at exclusive technology events, workshops, and networking sessions designed for engineering leaders and tech innovators.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="bg-glass-light border-glass backdrop-blur-lg rounded-2xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-foreground-tertiary" />
                  <Input
                    type="text"
                    placeholder="Search events..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedPrice} onValueChange={setSelectedPrice}>
                  <SelectTrigger>
                    <SelectValue placeholder="Price" />
                  </SelectTrigger>
                  <SelectContent>
                    {priceFilters.map(filter => (
                      <SelectItem key={filter} value={filter}>{filter}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Events List */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2 text-foreground font-montserrat">
                  {filteredEvents.length} Events Available
                </h2>
                <p className="text-foreground-muted font-montserrat">
                  Discover upcoming IndexNine events and join our tech community
                </p>
              </div>

              <div className="space-y-6">
                {filteredEvents.map((event) => {
                  const status = getEventStatus(event);
                  const registeredCount = registrationCounts[event.id] || 0;
                  
                  return (
                    <Card 
                      key={event.id}
                      className={`bg-glass-light border-glass backdrop-blur-lg hover:bg-glass-medium transition-all duration-300 cursor-pointer ${
                        selectedEvent?.id === event.id ? 'ring-2 ring-primary' : ''
                      }`}
                      onClick={() => setSelectedEvent(event)}
                    >
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-48 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                            <Calendar className="w-12 h-12 text-primary" />
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <Badge variant={status.variant} className="mb-2">
                                  {status.text}
                                </Badge>
                                <h3 className="text-xl font-semibold mb-2 text-foreground hover:text-primary transition-colors font-montserrat">
                                  {event.title}
                                </h3>
                              </div>
                              <div className="text-right">
                                <div className="text-lg font-bold text-primary">
                                  {event.price === 0 ? 'Free' : `$${event.price.toFixed(2)}`}
                                </div>
                                {event.price > 0 && (
                                  <div className="text-sm text-foreground-tertiary">per person</div>
                                )}
                              </div>
                            </div>
                            
                            <div className="space-y-2 mb-4">
                              <div className="flex items-center text-foreground-muted">
                                <Calendar className="w-4 h-4 mr-2" />
                                <span className="font-montserrat">{formatDate(event.date)} • {formatTime(event.time)}</span>
                              </div>
                              <div className="flex items-center text-foreground-muted">
                                <MapPin className="w-4 h-4 mr-2" />
                                <span className="font-montserrat">{event.location}</span>
                              </div>
                              <div className="flex items-center text-foreground-muted">
                                <Users className="w-4 h-4 mr-2" />
                                <span className="font-montserrat">{registeredCount}/{event.capacity} registered</span>
                              </div>
                            </div>
                          
                            <p className="text-foreground-muted mb-4 leading-relaxed font-montserrat">
                              {event.description}
                            </p>
                          
                            <div className="flex flex-col sm:flex-row gap-3">
                              <Button 
                                variant="hero" 
                                size="sm" 
                                className="flex-1"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleRegister(event);
                                }}
                                disabled={registeredCount >= event.capacity}
                              >
                                <Ticket className="w-4 h-4 mr-2" />
                                {registeredCount >= event.capacity ? 'Event Full' : 'Register Now'}
                              </Button>
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedEvent(event);
                                }}
                              >
                                View Details
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {filteredEvents.length === 0 && (
                <Card className="bg-glass-light border-glass backdrop-blur-lg">
                  <CardContent className="p-12 text-center">
                    <AlertCircle className="w-12 h-12 text-foreground-muted mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">No Events Found</h3>
                    <p className="text-foreground-muted">Try adjusting your search filters to find more events.</p>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Event Details Sidebar */}
            <div className="lg:col-span-1">
              {selectedEvent && (
                <div className="sticky top-28 space-y-6">
                  {/* Map Placeholder */}
                  <Card className="bg-glass-light border-glass backdrop-blur-lg">
                    <CardContent className="p-0">
                      <div className="h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-t-lg flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-background-dark/20"></div>
                        <div className="text-center z-10">
                          <MapPin className="w-12 h-12 text-primary mx-auto mb-3" />
                          <h3 className="text-lg font-semibold mb-2">{selectedEvent.location}</h3>
                          <p className="text-sm text-foreground-secondary">Event Location</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Selected Event Details */}
                  <Card className="bg-glass-light border-glass backdrop-blur-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-primary" />
                        Event Details
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-medium text-primary mb-2">Date & Time</h4>
                        <p className="text-foreground-secondary">{formatDate(selectedEvent.date)}</p>
                        <p className="text-foreground-secondary">{formatTime(selectedEvent.time)}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-primary mb-2">Location</h4>
                        <p className="text-foreground-secondary">{selectedEvent.location}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-primary mb-2">Category</h4>
                        <Badge variant="outline">{selectedEvent.category}</Badge>
                      </div>
                      <div>
                        <h4 className="font-medium text-primary mb-2">Registration</h4>
                        <p className="text-foreground-secondary">
                          {registrationCounts[selectedEvent.id] || 0}/{selectedEvent.capacity} registered
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-primary mb-2">Price</h4>
                        <p className="text-foreground-secondary">
                          {selectedEvent.price === 0 ? 'Free' : `$${selectedEvent.price.toFixed(2)}`}
                        </p>
                      </div>
                      
                      <Button 
                        variant="hero" 
                        className="w-full"
                        onClick={() => handleRegister(selectedEvent)}
                        disabled={(registrationCounts[selectedEvent.id] || 0) >= selectedEvent.capacity}
                      >
                        <Ticket className="w-4 h-4 mr-2" />
                        {(registrationCounts[selectedEvent.id] || 0) >= selectedEvent.capacity 
                          ? 'Event Full' 
                          : 'Register for This Event'
                        }
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Categories Filter */}
                  <Card className="bg-glass-light border-glass backdrop-blur-lg">
                    <CardHeader>
                      <CardTitle>Filter by Category</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {categories.filter(cat => cat !== 'All').map(category => (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                            selectedCategory === category
                              ? 'bg-primary/20 text-primary'
                              : 'text-foreground-secondary hover:bg-white/5'
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form Modal */}
      {showRegistrationForm && selectedEvent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <EventRegistrationForm
              event={selectedEvent}
              onRegistrationComplete={handleRegistrationComplete}
              onClose={() => setShowRegistrationForm(false)}
            />
          </div>
        </div>
      )}

      {/* Ticket Modal */}
      {showTicket && selectedEvent && currentRegistration && (
        <EventTicket
          event={selectedEvent}
          registration={currentRegistration}
          onClose={() => setShowTicket(false)}
        />
      )}

      <Footer />
    </div>
  );
};

export default Events;