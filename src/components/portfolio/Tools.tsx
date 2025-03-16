
import { Card } from "@/components/ui/card";

type ToolCategory = {
  name: string;
  tools: string[];
};

const ToolCard = ({ category }: { category: ToolCategory }) => {
  return (
    <Card className="p-6 hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold mb-4 text-todo-blue">{category.name}</h3>
      <div className="flex flex-wrap gap-2">
        {category.tools.map((tool, index) => (
          <span 
            key={index} 
            className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
          >
            {tool}
          </span>
        ))}
      </div>
    </Card>
  );
};

const Tools = () => {
  const toolCategories: ToolCategory[] = [
    {
      name: "Development",
      tools: ["Git & Github", "Docker", "MySQL", "JavaScript", "React", "Node.js"]
    },
    {
      name: "UI/UX",
      tools: ["Figma", "Galileo AI", "Adobe XD", "Sketch", "Prototyping"]
    },
    {
      name: "Virtual Assistant",
      tools: ["Trello", "Asana", "Zoom", "Zipper", "HubSpot", "Mailchimp"]
    }
  ];

  return (
    <section id="tools" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tools & Skills</h2>
          <div className="h-1 w-20 bg-todo-blue mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The technologies and platforms I use to bring ideas to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toolCategories.map((category, index) => (
            <ToolCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
