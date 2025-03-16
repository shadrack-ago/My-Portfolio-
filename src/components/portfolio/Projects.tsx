
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ProjectCard = ({ 
  title, 
  description, 
  tags, 
  link 
}: { 
  title: string; 
  description: string; 
  tags: string[]; 
  link?: string 
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100 group">
      <div className="aspect-video bg-gray-100 rounded-lg mb-6 overflow-hidden">
        {/* Project image would go here */}
        <div className="w-full h-full flex items-center justify-center text-gray-400">
          Project Image
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-todo-blue transition-colors">{title}</h3>
      <p className="text-gray-600 mb-4 text-sm">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-600">
            {tag}
          </Badge>
        ))}
      </div>
      {link && (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center text-todo-blue hover:underline"
        >
          View Project <ArrowUpRight size={16} className="ml-1" />
        </a>
      )}
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "HELB UI/UX Redesign",
      description: "A team project to improve the user interface of the Higher Education Loans Board system based on student feedback.",
      tags: ["UI/UX", "Figma", "User Research"],
      link: "#"
    },
    {
      title: "Virtual Assistant Services",
      description: "Offering professional virtual assistance including project management with Asana, calendar management, and record keeping.",
      tags: ["Asana", "Google Sheets", "Management"],
      link: "#"
    },
    {
      title: "Cofpak Website Co-design",
      description: "Collaborated on designing an effective web presence for Cofpak.",
      tags: ["Web Design", "UI/UX", "Collaboration"],
      link: "#"
    },
    {
      title: "AgoTech Website Branding",
      description: "Created brand identity and website design for AgoTech.",
      tags: ["Branding", "Web Design", "Identity"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="h-1 w-20 bg-todo-blue mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A collection of my work across UI/UX design, virtual assistance, and software solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
