
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DoctorList from "@/components/telemedicine/DoctorList";
import AppointmentList from "@/components/telemedicine/AppointmentList";
import VideoCall from "@/components/telemedicine/VideoCall";
import PatientDashboard from "@/components/telemedicine/PatientDashboard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Video, Calendar, ClipboardList, Home } from "lucide-react";
import { Link } from "react-router-dom";

const Telemedicine = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [mounted, setMounted] = useState(false);
  const { toast } = useToast();

  // Used for SSR compatibility
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Prevent hydration errors
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="py-6 border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              MediConnect
            </Link>
            <Button variant="outline">Sign In</Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-3xl">Telemedicine Portal</CardTitle>
            <CardDescription>
              Manage your appointments, consult with doctors, and access your medical records.
            </CardDescription>
          </CardHeader>
        </Card>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full max-w-md mx-auto grid grid-cols-4 mb-8">
            <TabsTrigger value="dashboard" className="flex flex-col items-center gap-1 py-2">
              <Home className="h-4 w-4" />
              <span>Dashboard</span>
            </TabsTrigger>
            <TabsTrigger value="doctors" className="flex flex-col items-center gap-1 py-2">
              <ClipboardList className="h-4 w-4" />
              <span>Doctors</span>
            </TabsTrigger>
            <TabsTrigger value="appointments" className="flex flex-col items-center gap-1 py-2">
              <Calendar className="h-4 w-4" />
              <span>Appointments</span>
            </TabsTrigger>
            <TabsTrigger value="videocall" className="flex flex-col items-center gap-1 py-2">
              <Video className="h-4 w-4" />
              <span>Video Call</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            <PatientDashboard />
          </TabsContent>

          <TabsContent value="doctors">
            <DoctorList />
          </TabsContent>

          <TabsContent value="appointments">
            <AppointmentList />
          </TabsContent>

          <TabsContent value="videocall">
            <VideoCall />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Telemedicine;
