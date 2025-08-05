import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus, Users, MapPin, Save, RotateCcw, Trash2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface Table {
  id: string;
  name: string;
  seats: number;
  x: number;
  y: number;
  assigned?: string[];
}

interface SeatingChart {
  id: string;
  name: string;
  layout_data: any;
  total_capacity: number;
}

interface Registration {
  id: string;
  attendee_name: string;
  attendee_email: string;
  company_name: string;
}

interface SeatingChartManagerProps {
  eventId: string;
}

export const SeatingChartManager: React.FC<SeatingChartManagerProps> = ({ eventId }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [seatingCharts, setSeatingCharts] = useState<SeatingChart[]>([]);
  const [activeChart, setActiveChart] = useState<SeatingChart | null>(null);
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [selectedTable, setSelectedTable] = useState<Table | null>(null);
  const [draggedTable, setDraggedTable] = useState<Table | null>(null);
  const [isCreatingChart, setIsCreatingChart] = useState(false);
  const [newChartName, setNewChartName] = useState('');
  const [newTableName, setNewTableName] = useState('');
  const [newTableSeats, setNewTableSeats] = useState(8);

  useEffect(() => {
    fetchSeatingCharts();
    fetchRegistrations();
  }, [eventId]);

  useEffect(() => {
    if (activeChart) {
      drawSeatingChart();
    }
  }, [activeChart, selectedTable]);

  const fetchSeatingCharts = async () => {
    try {
      const { data, error } = await supabase
        .from('seating_charts')
        .select('*')
        .eq('event_id', eventId);

      if (error) throw error;

      const charts = (data || []).map(chart => ({
        ...chart,
        layout_data: typeof chart.layout_data === 'string' 
          ? JSON.parse(chart.layout_data) 
          : chart.layout_data || { tables: [] }
      }));

      setSeatingCharts(charts);
      if (charts.length > 0 && !activeChart) {
        setActiveChart(charts[0]);
      }
    } catch (error) {
      console.error('Error fetching seating charts:', error);
      toast.error('Failed to load seating charts');
    }
  };

  const fetchRegistrations = async () => {
    try {
      const { data, error } = await supabase
        .from('event_registrations')
        .select('id, attendee_name, attendee_email, company_name')
        .eq('event_id', eventId)
        .eq('registration_status', 'confirmed');

      if (error) throw error;
      setRegistrations(data || []);
    } catch (error) {
      console.error('Error fetching registrations:', error);
    }
  };

  const drawSeatingChart = () => {
    const canvas = canvasRef.current;
    if (!canvas || !activeChart) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw grid
    ctx.strokeStyle = '#f0f0f0';
    ctx.lineWidth = 1;
    for (let x = 0; x <= canvas.width; x += 20) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y <= canvas.height; y += 20) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    // Draw tables
    activeChart.layout_data.tables.forEach((table) => {
      const isSelected = selectedTable?.id === table.id;
      
      // Table circle
      ctx.beginPath();
      ctx.arc(table.x, table.y, 30, 0, 2 * Math.PI);
      ctx.fillStyle = isSelected ? '#3b82f6' : '#e5e7eb';
      ctx.fill();
      ctx.strokeStyle = isSelected ? '#1d4ed8' : '#9ca3af';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Table name
      ctx.fillStyle = isSelected ? '#ffffff' : '#374151';
      ctx.font = '12px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(table.name, table.x, table.y - 5);

      // Seat count
      ctx.fillText(`${table.seats} seats`, table.x, table.y + 8);
    });
  };

  const handleCanvasClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas || !activeChart) return;

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Check if click is on a table
    const clickedTable = activeChart.layout_data.tables.find((table) => {
      const distance = Math.sqrt(Math.pow(x - table.x, 2) + Math.pow(y - table.y, 2));
      return distance <= 30;
    });

    setSelectedTable(clickedTable || null);
  };

  const addNewTable = () => {
    if (!activeChart || !newTableName.trim()) return;

    const newTable: Table = {
      id: `table_${Date.now()}`,
      name: newTableName,
      seats: newTableSeats,
      x: 150,
      y: 150,
      assigned: []
    };

    const updatedChart = {
      ...activeChart,
      layout_data: {
        ...activeChart.layout_data,
        tables: [...activeChart.layout_data.tables, newTable]
      }
    };

    setActiveChart(updatedChart);
    setNewTableName('');
    setNewTableSeats(8);
  };

  const deleteSelectedTable = () => {
    if (!activeChart || !selectedTable) return;

    const updatedChart = {
      ...activeChart,
      layout_data: {
        ...activeChart.layout_data,
        tables: activeChart.layout_data.tables.filter(t => t.id !== selectedTable.id)
      }
    };

    setActiveChart(updatedChart);
    setSelectedTable(null);
  };

  const saveSeatingChart = async () => {
    if (!activeChart) return;

    try {
      const { error } = await supabase
        .from('seating_charts')
        .upsert({
          id: activeChart.id,
          event_id: eventId,
          name: activeChart.name,
          layout_data: JSON.stringify(activeChart.layout_data),
          total_capacity: activeChart.layout_data.tables.reduce((sum: number, table: Table) => sum + table.seats, 0)
        });

      if (error) throw error;

      toast.success('Seating chart saved successfully!');
      fetchSeatingCharts();
    } catch (error) {
      console.error('Error saving seating chart:', error);
      toast.error('Failed to save seating chart');
    }
  };

  const createNewChart = async () => {
    if (!newChartName.trim()) return;

    try {
      const { data, error } = await supabase
        .from('seating_charts')
        .insert({
          event_id: eventId,
          name: newChartName,
          layout_data: JSON.stringify({ tables: [] }),
          total_capacity: 0
        })
        .select()
        .single();

      if (error) throw error;

      const newChart = {
        ...data,
        layout_data: { tables: [] }
      };

      setSeatingCharts(prev => [...prev, newChart]);
      setActiveChart(newChart);
      setNewChartName('');
      setIsCreatingChart(false);
      toast.success('New seating chart created!');
    } catch (error) {
      console.error('Error creating seating chart:', error);
      toast.error('Failed to create seating chart');
    }
  };

  return (
    <div className="space-y-6">
      {/* Chart Selection and Controls */}
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex-1 min-w-64">
          <Label htmlFor="chart-select">Active Seating Chart</Label>
          <Select
            value={activeChart?.id || ''}
            onValueChange={(value) => {
              const chart = seatingCharts.find(c => c.id === value);
              setActiveChart(chart || null);
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a seating chart" />
            </SelectTrigger>
            <SelectContent>
              {seatingCharts.map((chart) => (
                <SelectItem key={chart.id} value={chart.id}>
                  {chart.name} ({chart.total_capacity} seats)
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Dialog open={isCreatingChart} onOpenChange={setIsCreatingChart}>
          <DialogTrigger asChild>
            <Button variant="outline">
              <Plus className="h-4 w-4 mr-2" />
              New Chart
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Seating Chart</DialogTitle>
              <DialogDescription>
                Create a new seating chart for this event
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="chart-name">Chart Name</Label>
                <Input
                  id="chart-name"
                  value={newChartName}
                  onChange={(e) => setNewChartName(e.target.value)}
                  placeholder="e.g., Main Ballroom, VIP Section"
                />
              </div>
              <div className="flex gap-2">
                <Button onClick={createNewChart} disabled={!newChartName.trim()}>
                  Create Chart
                </Button>
                <Button variant="outline" onClick={() => setIsCreatingChart(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <Button onClick={saveSeatingChart} disabled={!activeChart}>
          <Save className="h-4 w-4 mr-2" />
          Save Chart
        </Button>
      </div>

      {activeChart && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Canvas Area */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  {activeChart.name}
                </CardTitle>
                <CardDescription>
                  Click on tables to select them. Total Capacity: {activeChart.layout_data.tables.reduce((sum, table) => sum + table.seats, 0)} seats
                </CardDescription>
              </CardHeader>
              <CardContent>
                <canvas
                  ref={canvasRef}
                  width={600}
                  height={400}
                  className="border border-gray-200 rounded cursor-pointer w-full"
                  onClick={handleCanvasClick}
                />
              </CardContent>
            </Card>
          </div>

          {/* Controls */}
          <div className="space-y-4">
            {/* Add Table */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Add Table</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="table-name">Table Name</Label>
                  <Input
                    id="table-name"
                    value={newTableName}
                    onChange={(e) => setNewTableName(e.target.value)}
                    placeholder="e.g., Table 1, VIP Table"
                  />
                </div>
                <div>
                  <Label htmlFor="table-seats">Number of Seats</Label>
                  <Input
                    id="table-seats"
                    type="number"
                    min="1"
                    max="20"
                    value={newTableSeats}
                    onChange={(e) => setNewTableSeats(parseInt(e.target.value) || 8)}
                  />
                </div>
                <Button onClick={addNewTable} disabled={!newTableName.trim()} className="w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Table
                </Button>
              </CardContent>
            </Card>

            {/* Selected Table Info & Guest Assignment */}
            {selectedTable && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Selected Table</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-medium">{selectedTable.name}</p>
                    <p className="text-sm text-gray-600">{selectedTable.seats} seats</p>
                  </div>
                  
                  {/* Assign Guest */}
                  <div className="space-y-2">
                    <Label>Assign Guest to Table</Label>
                    <Select onValueChange={async (registrationId) => {
                      try {
                        const { error } = await supabase
                          .from('seating_assignments')
                          .upsert({
                            event_id: eventId,
                            registration_id: registrationId,
                            table_id: selectedTable.id,
                            table_name: selectedTable.name
                          });
                        
                        if (error) throw error;
                        toast.success('Guest assigned to table successfully!');
                        // Refresh data
                        fetchRegistrations();
                      } catch (error) {
                        console.error('Error assigning guest:', error);
                        toast.error('Failed to assign guest to table');
                      }
                    }}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select guest to assign" />
                      </SelectTrigger>
                      <SelectContent>
                        {registrations.map((reg) => (
                          <SelectItem key={reg.id} value={reg.id}>
                            {reg.attendee_name} ({reg.company_name || 'No company'})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Currently Assigned Guests</Label>
                    <div className="space-y-1 max-h-32 overflow-y-auto">
                      {registrations
                        .filter(reg => {
                          // Check if this registration is assigned to this table
                          return true; // We'll implement the actual check after we fetch assignments
                        })
                        .map((reg) => (
                          <div key={reg.id} className="flex items-center justify-between p-2 bg-gray-50 rounded text-sm">
                            <span>{reg.attendee_name}</span>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-6 w-6 p-0 text-red-600 hover:text-red-800"
                              onClick={async () => {
                                try {
                                  const { error } = await supabase
                                    .from('seating_assignments')
                                    .delete()
                                    .eq('registration_id', reg.id)
                                    .eq('table_id', selectedTable.id);
                                  
                                  if (error) throw error;
                                  toast.success('Guest removed from table');
                                  fetchRegistrations();
                                } catch (error) {
                                  console.error('Error removing guest:', error);
                                  toast.error('Failed to remove guest from table');
                                }
                              }}
                            >
                              ×
                            </Button>
                          </div>
                        ))}
                    </div>
                  </div>

                  <Button
                    onClick={deleteSelectedTable}
                    variant="outline"
                    size="sm"
                    className="w-full border-red-300 text-red-600 hover:bg-red-50"
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete Table
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Chart Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Total Tables:</span>
                    <span className="font-medium">{activeChart.layout_data.tables.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Capacity:</span>
                    <span className="font-medium">{activeChart.layout_data.tables.reduce((sum, table) => sum + table.seats, 0)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Registered Guests:</span>
                    <span className="font-medium">{registrations.length}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {!activeChart && seatingCharts.length === 0 && (
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-12">
            <MapPin className="h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No Seating Charts</h3>
            <p className="text-gray-600 text-center mb-4">
              Create your first seating chart to start managing table assignments for this event.
            </p>
            <Button onClick={() => setIsCreatingChart(true)}>
              <Plus className="h-4 w-4 mr-2" />
              Create First Chart
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};