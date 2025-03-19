
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Video, Calendar, Clock, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";

// Mock data for appointments
const mockAppointments = [
  {
    id: 1,
    doctorName: "Dr. Sarah Johnson",
    doctorSpecialty: "Cardiologist",
    date: "2023-11-10",
    time: "10:00 AM",
    status: "upcoming",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    doctorName: "Dr. Michael Chen",
    doctorSpecialty: "Dermatologist",
    date: "2023-11-15",
    time: "2:30 PM",
    status: "upcoming",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    doctorName: "Dr. Emily Rodriguez",
    doctorSpecialty: "Pediatrician",
    date: "2023-10-28",
    time: "9:15 AM",
    status: "completed",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 4,
    doctorName: "Dr. James Wilson",
    doctorSpecialty: "Neurologist",
    date: "2023-10-05",
    time: "3:45 PM",
    status: "completed",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
];

const AppointmentList = () => {
  const [appointments, setAppointments] = useState(mockAppointments);
  const { toast } = useToast();

  const handleJoinCall = (appointmentId: number) => {
    // Logic to join video call
    toast({
      title: "Joining Video Call",
      description: "Connecting to your doctor...",
    });
  };

  const handleCancelAppointment = (appointmentId: number) => {
    // Filter out the appointment
    setAppointments(appointments.filter(app => app.id !== appointmentId));
    
    toast({
      title: "Appointment Cancelled",
      description: "Your appointment has been cancelled successfully.",
    });
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const upcomingAppointments = appointments.filter(app => app.status === "upcoming");
  const completedAppointments = appointments.filter(app => app.status === "completed");

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">My Appointments</h2>
      
      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        
        <TabsContent value="upcoming">
          {upcomingAppointments.length > 0 ? (
            <div className="space-y-4">
              {upcomingAppointments.map((appointment) => (
                <Card key={appointment.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <img 
                        src={appointment.image} 
                        alt={appointment.doctorName} 
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium text-lg">{appointment.doctorName}</h3>
                        <p className="text-muted-foreground">{appointment.doctorSpecialty}</p>
                        <div className="flex items-center gap-4 mt-2">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span className="text-sm">{formatDate(appointment.date)}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            <span className="text-sm">{appointment.time}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Button 
                          onClick={() => handleJoinCall(appointment.id)} 
                          className="flex items-center gap-1"
                        >
                          <Video className="w-4 h-4" />
                          Join Call
                        </Button>
                        <Button 
                          variant="outline" 
                          onClick={() => handleCancelAppointment(appointment.id)}
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-muted/30 rounded-lg">
              <Calendar className="w-10 h-10 mx-auto text-muted-foreground" />
              <h3 className="mt-4 text-lg font-medium">No Upcoming Appointments</h3>
              <p className="text-muted-foreground">You don't have any scheduled appointments.</p>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="completed">
          {completedAppointments.length > 0 ? (
            <div className="space-y-4">
              {completedAppointments.map((appointment) => (
                <Card key={appointment.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <img 
                        src={appointment.image} 
                        alt={appointment.doctorName} 
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium text-lg">{appointment.doctorName}</h3>
                        <p className="text-muted-foreground">{appointment.doctorSpecialty}</p>
                        <div className="flex items-center gap-4 mt-2">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span className="text-sm">{formatDate(appointment.date)}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            <span className="text-sm">{appointment.time}</span>
                          </div>
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-green-50 text-green-800 border-green-300">
                        Completed
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-muted/30 rounded-lg">
              <User className="w-10 h-10 mx-auto text-muted-foreground" />
              <h3 className="mt-4 text-lg font-medium">No Completed Appointments</h3>
              <p className="text-muted-foreground">You don't have any completed appointments yet.</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AppointmentList;
