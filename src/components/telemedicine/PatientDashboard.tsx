
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, Heart, Activity, Plus, FileText } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const PatientDashboard = () => {
  // Mock patient health data
  const healthData = {
    name: "John Doe",
    age: 35,
    heartRate: "72 bpm",
    bloodPressure: "120/80 mmHg",
    upcomingAppointment: {
      doctor: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      date: "Nov 10, 2023",
      time: "10:00 AM",
    },
    recentDiagnosis: {
      condition: "Hypertension",
      date: "Oct 15, 2023",
      doctor: "Dr. Michael Chen",
      notes: "Patient shows signs of high blood pressure. Recommended lifestyle changes and scheduled follow-up.",
    },
    medications: [
      { name: "Lisinopril", dosage: "10mg", frequency: "Once daily" },
      { name: "Aspirin", dosage: "81mg", frequency: "Once daily" },
    ],
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Patient Dashboard</h2>
        <Button variant="outline">View Medical History</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Heart Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Heart className="h-5 w-5 text-red-500 mr-2" />
              <span className="text-2xl font-bold">{healthData.heartRate}</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Normal range</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Blood Pressure</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Activity className="h-5 w-5 text-blue-500 mr-2" />
              <span className="text-2xl font-bold">{healthData.bloodPressure}</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Normal range</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Next Appointment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-muted-foreground mb-1">
              <Calendar className="h-4 w-4 mr-1" />
              <span className="text-sm">{healthData.upcomingAppointment.date}</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <Clock className="h-4 w-4 mr-1" />
              <span className="text-sm">{healthData.upcomingAppointment.time}</span>
            </div>
            <p className="font-medium mt-2">{healthData.upcomingAppointment.doctor}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Medications</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-1">
              {healthData.medications.map((med, index) => (
                <li key={index} className="text-sm">
                  {med.name} - {med.dosage}
                </li>
              ))}
            </ul>
            <Button variant="ghost" size="sm" className="mt-2 w-full flex items-center justify-center text-xs">
              <Plus className="h-3 w-3 mr-1" /> Add Medication
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Diagnosis</CardTitle>
            <CardDescription>{healthData.recentDiagnosis.date} by {healthData.recentDiagnosis.doctor}</CardDescription>
          </CardHeader>
          <CardContent>
            <Alert>
              <FileText className="h-4 w-4" />
              <AlertTitle>{healthData.recentDiagnosis.condition}</AlertTitle>
              <AlertDescription>
                {healthData.recentDiagnosis.notes}
              </AlertDescription>
            </Alert>
            <Button variant="outline" className="mt-4 w-full">View Complete Report</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Patient Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <User className="h-10 w-10 bg-primary/10 p-2 rounded-full text-primary mr-4" />
                <div>
                  <h3 className="font-medium">{healthData.name}</h3>
                  <p className="text-sm text-muted-foreground">{healthData.age} years old</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <p className="text-sm font-medium">Blood Type</p>
                  <p className="text-sm text-muted-foreground">A+</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Allergies</p>
                  <p className="text-sm text-muted-foreground">Penicillin</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Weight</p>
                  <p className="text-sm text-muted-foreground">75 kg</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Height</p>
                  <p className="text-sm text-muted-foreground">178 cm</p>
                </div>
              </div>
              
              <Button variant="outline" className="w-full">Edit Information</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PatientDashboard;
