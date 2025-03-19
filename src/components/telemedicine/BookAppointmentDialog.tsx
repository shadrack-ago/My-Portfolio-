
import { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { CalendarIcon } from "lucide-react";

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

interface BookAppointmentDialogProps {
  doctor: Doctor;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", 
  "11:00 AM", "11:30 AM", "1:00 PM", "1:30 PM", 
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", 
  "4:00 PM", "4:30 PM"
];

const BookAppointmentDialog = ({ doctor, open, onOpenChange }: BookAppointmentDialogProps) => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState<string>("");
  const { toast } = useToast();

  const handleBookAppointment = () => {
    if (!date || !timeSlot) {
      toast({
        title: "Please select a date and time",
        variant: "destructive",
      });
      return;
    }

    // Here you would normally send this data to your backend
    console.log("Booking appointment with:", {
      doctorId: doctor.id,
      doctorName: doctor.name,
      date: format(date, "yyyy-MM-dd"),
      time: timeSlot,
    });

    // Show success toast
    toast({
      title: "Appointment Booked!",
      description: `Your appointment with ${doctor.name} on ${format(date, "MMMM d, yyyy")} at ${timeSlot} has been scheduled.`,
      duration: 5000,
    });

    // Close the dialog
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Book an Appointment</DialogTitle>
          <DialogDescription>
            Schedule your appointment with {doctor.name}
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <label className="text-sm font-medium">Select Date</label>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border pointer-events-auto"
              disabled={(date) => {
                // Disable dates in the past and weekends
                const day = date.getDay();
                const isWeekend = day === 0 || day === 6;
                return date < new Date(new Date().setHours(0, 0, 0, 0)) || isWeekend;
              }}
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-medium">Select Time</label>
            <Select value={timeSlot} onValueChange={setTimeSlot}>
              <SelectTrigger>
                <SelectValue placeholder="Select time slot" />
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map((time) => (
                  <SelectItem key={time} value={time}>
                    {time}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleBookAppointment}>
            Book Appointment
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BookAppointmentDialog;
