
import { Quote } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious 
} from "@/components/ui/carousel";

type Testimonial = {
  quote: string;
  author: string;
  position: string;
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 h-full flex flex-col">
      <div className="mb-6">
        <Quote size={32} className="text-todo-blue/20" />
      </div>
      <p className="text-gray-600 mb-6 flex-grow">{testimonial.quote}</p>
      <div className="mt-auto">
        <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
        <p className="text-sm text-gray-500">{testimonial.position}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "Your services are exemplary and timely, looking forward to work with you in Future",
      author: "Benedict Otieno",
      position: "Client"
    },
    {
      quote: "I highly recommend working with you, Your designs were great and futuristic",
      author: "Joab Ogallo",
      position: "Chair, Cofpak"
    },
    {
      quote: "Shadrack's attention to detail and commitment to quality makes him stand out among professionals in his field.",
      author: "Jane Doe",
      position: "Project Manager"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h2>
          <div className="h-1 w-20 bg-todo-blue mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            What clients and collaborators say about working with me.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1 p-2">
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
