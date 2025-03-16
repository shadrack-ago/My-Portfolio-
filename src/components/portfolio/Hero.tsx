
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-[90vh] flex items-center bg-gray-50">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-xl font-medium text-todo-blue">Virtual Assistant, UI/UX, Software Solution provider</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              SHADRACK OTIENO
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              Transforming ideas into digital solutions. Specializing in UI/UX design, software development, 
              and virtual assistance to help businesses grow.
            </p>
            <div className="pt-4 flex gap-4">
              <Button className="bg-todo-blue hover:bg-todo-blue/90">
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button variant="outline" className="border-todo-blue text-todo-blue hover:bg-todo-blue hover:text-white">
                <a href="#about">Learn More</a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-todo-blue/10 overflow-hidden">
              {/* Hero image would go here */}
              <div className="absolute inset-0 flex items-center justify-center text-todo-blue font-bold text-xl">SHADRACK</div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" className="flex flex-col items-center text-gray-500 hover:text-todo-blue transition-colors">
            <span className="text-sm mb-1">Scroll Down</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
