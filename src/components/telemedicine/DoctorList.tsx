
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Star } from "lucide-react";
import BookAppointmentDialog from "./BookAppointmentDialog";

// Mock data for doctors
const mockDoctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    rating: 4.8,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    location: "New York, NY",
    availability: ["Monday", "Wednesday", "Friday"],
    experience: "12 years",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Dermatologist",
    rating: 4.7,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    location: "San Francisco, CA",
    availability: ["Tuesday", "Thursday", "Saturday"],
    experience: "8 years",
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrician",
    rating: 4.9,
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    location: "Chicago, IL",
    availability: ["Monday", "Tuesday", "Thursday"],
    experience: "15 years",
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialty: "Neurologist",
    rating: 4.6,
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    location: "Boston, MA",
    availability: ["Wednesday", "Friday", "Saturday"],
    experience: "10 years",
  },
];

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  image: string;
  location: string;
  availability: string[];
  experience: string;
}

const DoctorList = () => {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleBookAppointment = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setIsDialogOpen(true);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Available Doctors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockDoctors.map((doctor) => (
          <Card key={doctor.id} className="overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex items-start gap-4">
                <Avatar>
                  <img src={doctor.image} alt={doctor.name} className="aspect-square h-full w-full" />
                </Avatar>
                <div className="flex-1">
                  <CardTitle className="text-xl">{doctor.name}</CardTitle>
                  <div className="text-muted-foreground">{doctor.specialty}</div>
                  <div className="flex items-center mt-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span className="ml-1 text-sm">{doctor.rating}</span>
                    <span className="mx-2 text-muted-foreground">•</span>
                    <span className="text-sm">{doctor.experience}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-muted-foreground mb-2">
                <MapPin className="h-4 w-4 mr-1" />
                {doctor.location}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-1" />
                Available: {doctor.availability.join(", ")}
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={() => handleBookAppointment(doctor)} 
                className="w-full"
              >
                Book Appointment
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {selectedDoctor && (
        <BookAppointmentDialog
          doctor={selectedDoctor}
          open={isDialogOpen}
          onOpenChange={setIsDialogOpen}
        />
      )}
    </div>
  );
};

export default DoctorList;
