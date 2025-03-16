
import { Code, Layout, Calendar } from "lucide-react";

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string 
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-8 border border-gray-100">
      <div className="w-14 h-14 rounded-full bg-todo-blue/10 flex items-center justify-center mb-6">
        <Icon size={24} className="text-todo-blue" />
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Software Solution Provider",
      description: "As a budding Software Solution Provider, I specialize in delivering efficient and scalable web solutions. With a foundation in JavaScript, I create custom applications tailored to client needs."
    },
    {
      icon: Layout,
      title: "UI/UX Designer",
      description: "As a UI/UX designer, I harness the power of Galileo AI and Figma to create intuitive and visually appealing user experiences. My process is grounded in thorough user research."
    },
    {
      icon: Calendar,
      title: "Virtual Assistant",
      description: "As a certified Virtual Assistant through ALX, I am passionate about supporting individuals and SMEs in streamlining their operations. I specialize in managing mail, calendars, and travel itineraries."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
          <div className="h-1 w-20 bg-todo-blue mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Delivering excellence across multiple domains to help businesses thrive in the digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
