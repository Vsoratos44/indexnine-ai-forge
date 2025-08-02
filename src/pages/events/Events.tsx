import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, Clock, Users, Search, Filter, ChevronDown } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LivingVoidBackground from '@/components/LivingVoidBackground';

// Sample IndexNine events data
const indexNineEvents = [
  {
    id: 1,
    title: 'AI & Machine Learning Summit',
    date: 'Wednesday, February 15',
    time: '9:00 AM PST',
    location: 'San Francisco, CA',
    address: '123 Market Street, San Francisco, CA 94105',
    coordinates: { lat: 37.7749, lng: -122.4194 },
    type: 'Conference',
    price: 'Free',
    attendees: 250,
    image: '/lovable-uploads/7f07299e-0d50-4a70-ac3b-4d27f0a98a19.png',
    description: 'Join IndexNine for an exclusive deep dive into the latest AI and ML technologies transforming enterprise software development.',
    category: 'Technology',
    status: 'Upcoming'
  },
  {
    id: 2,
    title: 'Custom Software Development Workshop',
    date: 'Thursday, February 22',
    time: '2:00 PM PST',
    location: 'Austin, TX',
    address: '456 South Congress Ave, Austin, TX 78704',
    coordinates: { lat: 30.2672, lng: -97.7431 },
    type: 'Workshop',
    price: '$50',
    attendees: 80,
    image: '/lovable-uploads/7f07299e-0d50-4a70-ac3b-4d27f0a98a19.png',
    description: 'Learn best practices for custom software development from IndexNine\'s engineering team.',
    category: 'Technology',
    status: 'Almost Full'
  },
  {
    id: 3,
    title: 'Data Engineering Masterclass',
    date: 'Monday, March 4',
    time: '10:00 AM EST',
    location: 'New York, NY',
    address: '789 Broadway, New York, NY 10003',
    coordinates: { lat: 40.7128, lng: -74.0060 },
    type: 'Masterclass',
    price: 'Free',
    attendees: 150,
    image: '/lovable-uploads/7f07299e-0d50-4a70-ac3b-4d27f0a98a19.png',
    description: 'Explore modern data engineering patterns and tools with IndexNine\'s data experts.',
    category: 'Technology',
    status: 'Registration Open'
  },
  {
    id: 4,
    title: 'Tech Leaders Networking Dinner',
    date: 'Friday, March 15',
    time: '6:00 PM PST',
    location: 'Seattle, WA',
    address: '321 Pike Street, Seattle, WA 98101',
    coordinates: { lat: 47.6062, lng: -122.3321 },
    type: 'Networking',
    price: '$75',
    attendees: 40,
    image: '/lovable-uploads/7f07299e-0d50-4a70-ac3b-4d27f0a98a19.png',
    description: 'Exclusive networking dinner for CTOs, VPs of Engineering, and tech leaders.',
    category: 'Networking',
    status: 'Limited Seats'
  }
];

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(indexNineEvents[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDate, setSelectedDate] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState('All');

  const categories = ['All', 'Technology', 'Networking'];
  const dateFilters = ['All', 'Today', 'Tomorrow', 'This Weekend', 'Next Week'];
  const priceFilters = ['All', 'Free', 'Paid'];

  const filteredEvents = indexNineEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    const matchesPrice = selectedPrice === 'All' || 
                        (selectedPrice === 'Free' && event.price === 'Free') ||
                        (selectedPrice === 'Paid' && event.price !== 'Free');
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

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
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-foreground-tertiary" />
                  <input
                    type="text"
                    placeholder="Search events..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-background-dark/50 border border-white/10 rounded-lg text-foreground-white placeholder-foreground-tertiary focus:outline-none focus:border-brand-primary"
                  />
                </div>
                
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-background-dark/50 border border-white/10 rounded-lg text-foreground-white focus:outline-none focus:border-brand-primary"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>

                <select
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="px-4 py-3 bg-background-dark/50 border border-white/10 rounded-lg text-foreground-white focus:outline-none focus:border-brand-primary"
                >
                  {dateFilters.map(filter => (
                    <option key={filter} value={filter}>{filter}</option>
                  ))}
                </select>

                <select
                  value={selectedPrice}
                  onChange={(e) => setSelectedPrice(e.target.value)}
                  className="px-4 py-3 bg-background-dark/50 border border-white/10 rounded-lg text-foreground-white focus:outline-none focus:border-brand-primary"
                >
                  {priceFilters.map(filter => (
                    <option key={filter} value={filter}>{filter}</option>
                  ))}
                </select>
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
                  {filteredEvents.length} Events in Your Area
                </h2>
                <p className="text-foreground-muted font-montserrat">
                  Discover upcoming IndexNine events and join our tech community
                </p>
              </div>

              <div className="space-y-6">
                {filteredEvents.map((event) => (
                  <Card 
                    key={event.id}
                    className={`bg-glass-light border-glass backdrop-blur-lg hover:bg-glass-medium transition-all duration-300 cursor-pointer ${
                      selectedEvent.id === event.id ? 'ring-2 ring-brand-primary' : ''
                    }`}
                    onClick={() => setSelectedEvent(event)}
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-48 h-32 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 rounded-lg flex items-center justify-center">
                          <Calendar className="w-12 h-12 text-brand-primary" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <span className="inline-block px-3 py-1 bg-brand-primary/20 text-brand-primary text-xs font-semibold rounded-full mb-2">
                                {event.status}
                              </span>
                              <h3 className="text-xl font-semibold mb-2 text-foreground hover:text-brand-primary transition-colors font-montserrat">
                                {event.title}
                              </h3>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-bold text-brand-primary">{event.price}</div>
                              {event.price !== 'Free' && (
                                <div className="text-sm text-foreground-tertiary">per person</div>
                              )}
                            </div>
                          </div>
                          
                            <div className="space-y-2 mb-4">
                              <div className="flex items-center text-foreground-muted">
                                <Calendar className="w-4 h-4 mr-2" />
                                <span className="font-montserrat">{event.date} • {event.time}</span>
                              </div>
                              <div className="flex items-center text-foreground-muted">
                                <MapPin className="w-4 h-4 mr-2" />
                                <span className="font-montserrat">{event.location}</span>
                              </div>
                              <div className="flex items-center text-foreground-muted">
                                <Users className="w-4 h-4 mr-2" />
                                <span className="font-montserrat">{event.attendees} attending</span>
                              </div>
                            </div>
                          
                          <p className="text-foreground-muted mb-4 leading-relaxed font-montserrat">
                            {event.description}
                          </p>
                          
                          <div className="flex flex-col sm:flex-row gap-3">
                            <Button variant="hero" size="sm" className="flex-1">
                              Register Now
                            </Button>
                            <Button variant="outline" size="sm">
                              Learn More
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Map and Selected Event Details */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                {/* Map */}
                <Card className="bg-glass-light border-glass backdrop-blur-lg">
                  <CardContent className="p-0">
                    <div className="h-64 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-t-lg flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-background-dark/20"></div>
                      <div className="text-center z-10">
                        <MapPin className="w-12 h-12 text-brand-primary mx-auto mb-3" />
                        <h3 className="text-lg font-semibold mb-2">{selectedEvent.location}</h3>
                        <p className="text-sm text-foreground-secondary">{selectedEvent.address}</p>
                      </div>
                      {/* Google Maps integration would go here */}
                      <div className="absolute bottom-4 right-4">
                        <Button variant="outline" size="sm">
                          View Map
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Selected Event Details */}
                <Card className="bg-glass-light border-glass backdrop-blur-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Event Details</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-brand-primary mb-2">Date & Time</h4>
                        <p className="text-foreground-secondary">{selectedEvent.date}</p>
                        <p className="text-foreground-secondary">{selectedEvent.time}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-brand-primary mb-2">Location</h4>
                        <p className="text-foreground-secondary">{selectedEvent.address}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-brand-primary mb-2">Event Type</h4>
                        <p className="text-foreground-secondary">{selectedEvent.type}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-brand-primary mb-2">Expected Attendance</h4>
                        <p className="text-foreground-secondary">{selectedEvent.attendees} people</p>
                      </div>
                    </div>
                    <Button variant="hero" className="w-full mt-6">
                      Register for This Event
                    </Button>
                  </CardContent>
                </Card>

                {/* Categories */}
                <Card className="bg-glass-light border-glass backdrop-blur-lg">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Categories</h3>
                    <div className="space-y-2">
                      {categories.filter(cat => cat !== 'All').map(category => (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                            selectedCategory === category
                              ? 'bg-brand-primary/20 text-brand-primary'
                              : 'text-foreground-secondary hover:bg-white/5'
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;