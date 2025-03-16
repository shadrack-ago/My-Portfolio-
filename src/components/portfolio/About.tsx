
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-todo-blue mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-lg">
              {/* About image would go here */}
              <div className="bg-gray-200 w-full h-80 flex items-center justify-center text-gray-500">
                Profile Image
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              BSc Computer Science Graduate
            </h3>
            <div className="text-gray-600 space-y-4">
              <p>
                I am a self-motivated professional with a solid foundation in
                tech, I have passion for delivering innovative business
                solutions. By leveraging technology, I aim to create tailored,
                effective strategies that meet unique client needs.
              </p>
              <p>
                My attention to detail and strong commitment to safeguarding
                customer privacy make me an excellent fit for both virtual
                and on-site roles. Adaptable and eager to learn, I thrive in
                collaborative environments and excel in fostering teamwork
                to achieve shared goals.
              </p>
            </div>
            <div className="pt-4">
              <Button className="bg-todo-blue hover:bg-todo-blue/90">
                <Download className="mr-2 h-4 w-4" /> Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
