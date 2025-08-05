import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { QrCode, Scan, CheckCircle, XCircle, Search, Users } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface Registration {
  id: string;
  attendee_name: string;
  attendee_email: string;
  company_name: string;
  job_title: string;
  checked_in: boolean;
  qr_code: string;
  registration_status: string;
}

interface QRCodeCheckInProps {
  eventId: string;
}

export const QRCodeCheckIn: React.FC<QRCodeCheckInProps> = ({ eventId }) => {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalRegistered: 0,
    checkedIn: 0,
    attendanceRate: 0
  });

  useEffect(() => {
    fetchRegistrations();
  }, [eventId]);

  const fetchRegistrations = async () => {
    try {
      const { data, error } = await supabase
        .from('event_registrations')
        .select('*')
        .eq('event_id', eventId)
        .order('created_at', { ascending: false });

      if (error) throw error;

      setRegistrations(data || []);
      
      // Calculate stats
      const total = data?.length || 0;
      const checkedInCount = data?.filter(r => r.checked_in).length || 0;
      const rate = total > 0 ? Math.round((checkedInCount / total) * 100) : 0;

      setStats({
        totalRegistered: total,
        checkedIn: checkedInCount,
        attendanceRate: rate
      });
    } catch (error) {
      console.error('Error fetching registrations:', error);
      toast.error('Failed to load registrations');
    } finally {
      setLoading(false);
    }
  };

  const handleCheckIn = async (registrationId: string, method: string = 'manual') => {
    try {
      // Update registration status
      const { error: updateError } = await supabase
        .from('event_registrations')
        .update({ 
          checked_in: true, 
          checked_in_at: new Date().toISOString() 
        })
        .eq('id', registrationId);

      if (updateError) throw updateError;

      // Log the check-in
      const { error: logError } = await supabase
        .from('check_in_logs')
        .insert({
          event_id: eventId,
          registration_id: registrationId,
          check_in_method: method,
          device_info: { userAgent: navigator.userAgent }
        });

      if (logError) throw logError;

      // Refresh data
      await fetchRegistrations();
      
      toast.success('Attendee checked in successfully!');
    } catch (error) {
      console.error('Error checking in attendee:', error);
      toast.error('Failed to check in attendee');
    }
  };

  const simulateQRScan = async () => {
    setIsScanning(true);
    
    // Simulate scanning delay
    setTimeout(() => {
      const uncheckedRegistrations = registrations.filter(r => !r.checked_in);
      if (uncheckedRegistrations.length > 0) {
        const randomReg = uncheckedRegistrations[Math.floor(Math.random() * uncheckedRegistrations.length)];
        handleCheckIn(randomReg.id, 'qr_code');
      } else {
        toast.info('All attendees are already checked in!');
      }
      setIsScanning(false);
    }, 2000);
  };

  const filteredRegistrations = registrations.filter(reg =>
    reg.attendee_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reg.attendee_email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (reg.company_name && reg.company_name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  if (loading) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center p-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Registered</p>
                <p className="text-2xl font-bold">{stats.totalRegistered}</p>
              </div>
              <Users className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Checked In</p>
                <p className="text-2xl font-bold">{stats.checkedIn}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Attendance Rate</p>
                <p className="text-2xl font-bold">{stats.attendanceRate}%</p>
              </div>
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-green-400 to-blue-600 flex items-center justify-center text-white text-sm font-bold">
                {stats.attendanceRate}%
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* QR Code Scanner */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <QrCode className="h-5 w-5" />
            QR Code Check-In
          </CardTitle>
          <CardDescription>
            Scan attendee QR codes for instant check-in
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center space-y-4">
            <div className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50">
              {isScanning ? (
                <div className="animate-pulse text-primary">
                  <Scan className="h-12 w-12" />
                </div>
              ) : (
                <QrCode className="h-12 w-12 text-gray-400" />
              )}
            </div>
            <Button 
              onClick={simulateQRScan}
              disabled={isScanning}
              className="w-full max-w-xs"
            >
              {isScanning ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Scanning...
                </>
              ) : (
                <>
                  <Scan className="h-4 w-4 mr-2" />
                  Simulate QR Scan
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Registration List */}
      <Card>
        <CardHeader>
          <CardTitle>Attendee List</CardTitle>
          <CardDescription>
            Search and manually check in attendees
          </CardDescription>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search by name, email, or company..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {filteredRegistrations.map((registration) => (
              <div
                key={registration.id}
                className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="font-medium">{registration.attendee_name}</p>
                    {registration.checked_in ? (
                      <Badge variant="default" className="bg-green-100 text-green-800">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Checked In
                      </Badge>
                    ) : (
                      <Badge variant="outline">
                        Pending
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{registration.attendee_email}</p>
                  {registration.company_name && (
                    <p className="text-sm text-gray-500">{registration.company_name}</p>
                  )}
                </div>
                {!registration.checked_in && (
                  <Button
                    onClick={() => handleCheckIn(registration.id)}
                    size="sm"
                    className="ml-4"
                  >
                    Check In
                  </Button>
                )}
              </div>
            ))}
            {filteredRegistrations.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No attendees found matching your search.
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};