import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { QrCode, Download, Calendar, MapPin, Clock, User, Mail, Phone } from 'lucide-react';

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

interface EventTicketProps {
  event: Event;
  registration: Registration;
  onClose: () => void;
}

export function EventTicket({ event, registration, onClose }: EventTicketProps) {
  const generateQRCodeSVG = (data: string) => {
    // This is a simple QR code representation using text
    // In production, you'd use a proper QR code library like qrcode
    const size = 120;
    const qrData = JSON.parse(atob(data));
    
    return (
      <div className="relative bg-white p-4 rounded-lg border-2 border-dashed border-gray-300">
        <div className="flex items-center justify-center w-28 h-28 bg-gray-100 rounded">
          <QrCode className="w-20 h-20 text-gray-600" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-xs font-mono text-gray-500 opacity-50 pointer-events-none">
          QR Code
        </div>
      </div>
    );
  };

  const downloadTicket = () => {
    // Create a downloadable ticket (in production, you'd generate a PDF)
    const ticketData = {
      event: event.title,
      attendee: registration.attendee_name,
      email: registration.attendee_email,
      date: event.date,
      time: event.time,
      location: event.location,
      registrationId: registration.id,
      qrCode: registration.qr_code
    };

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(ticketData, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `ticket-${event.title.replace(/\s+/g, '-').toLowerCase()}.json`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
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

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl bg-white">
        <CardHeader className="text-center bg-gradient-to-r from-primary to-primary-variant text-white rounded-t-lg">
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="bg-white/20 text-white">
              {registration.registration_status === 'waitlisted' ? 'Waitlisted' : 'Confirmed'}
            </Badge>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-white hover:bg-white/20"
            >
              ✕
            </Button>
          </div>
          <CardTitle className="text-2xl font-bold mt-2">Event Ticket</CardTitle>
          <p className="text-white/90">Your digital ticket for {event.title}</p>
        </CardHeader>

        <CardContent className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Event Details */}
            <div className="lg:col-span-2 space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">{event.title}</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{formatTime(event.time)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>

              {/* Attendee Information */}
              <div className="border-t pt-4">
                <h4 className="font-semibold mb-3">Attendee Information</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <User className="h-4 w-4 text-primary" />
                    <span>{registration.attendee_name}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-primary" />
                    <span>{registration.attendee_email}</span>
                  </div>
                  {registration.phone && (
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-primary" />
                      <span>{registration.phone}</span>
                    </div>
                  )}
                  {registration.company_name && (
                    <div className="text-sm">
                      <span className="font-medium">Company:</span> {registration.company_name}
                    </div>
                  )}
                  {registration.job_title && (
                    <div className="text-sm">
                      <span className="font-medium">Title:</span> {registration.job_title}
                    </div>
                  )}
                </div>
              </div>

              {/* Registration Details */}
              <div className="border-t pt-4">
                <h4 className="font-semibold mb-3">Registration Details</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Registration ID:</span>
                    <p className="font-mono text-xs text-muted-foreground">{registration.id}</p>
                  </div>
                  <div>
                    <span className="font-medium">Amount Paid:</span>
                    <p>${registration.amount_paid.toFixed(2)}</p>
                  </div>
                  <div>
                    <span className="font-medium">Registration Date:</span>
                    <p>{new Date(registration.created_at).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <span className="font-medium">Status:</span>
                    <Badge 
                      variant={registration.registration_status === 'confirmed' ? 'default' : 'secondary'}
                      className="ml-1"
                    >
                      {registration.registration_status}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* QR Code Section */}
            <div className="flex flex-col items-center justify-center space-y-4 bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-center">Entry QR Code</h4>
              {generateQRCodeSVG(registration.qr_code)}
              <p className="text-xs text-center text-muted-foreground">
                Show this QR code at the event entrance
              </p>
              <div className="text-xs font-mono bg-white p-2 rounded border break-all">
                {registration.qr_code.substring(0, 20)}...
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 mt-6 pt-4 border-t">
            <Button onClick={downloadTicket} variant="outline" className="flex-1">
              <Download className="h-4 w-4 mr-2" />
              Download Ticket
            </Button>
            <Button onClick={onClose} className="flex-1">
              Close
            </Button>
          </div>

          {/* Important Notes */}
          <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
            <h5 className="font-semibold text-yellow-800 mb-1">Important Notes:</h5>
            <ul className="text-xs text-yellow-700 space-y-1">
              <li>• Please arrive 15 minutes before the event start time</li>
              <li>• Bring a valid photo ID along with this ticket</li>
              <li>• This QR code is unique to your registration</li>
              <li>• Screenshots or printed versions are acceptable</li>
              {registration.registration_status === 'waitlisted' && (
                <li className="font-semibold">• You are on the waitlist - we'll notify you if a spot opens up</li>
              )}
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}