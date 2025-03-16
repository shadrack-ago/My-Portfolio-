
import { Phone, Mail, MapPin, Send, Download, Linkedin, GitHub, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactInfo = ({ 
  icon: Icon, 
  title, 
  content, 
  href 
}: { 
  icon: React.ElementType; 
  title: string; 
  content: string; 
  href: string 
}) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
    >
      <div className="bg-todo-blue/10 p-3 rounded-full">
        <Icon size={20} className="text-todo-blue" />
      </div>
      <div>
        <h4 className="font-medium text-gray-900">{title}</h4>
        <p className="text-gray-600">{content}</p>
      </div>
    </a>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Talk To Me</h2>
          <div className="h-1 w-20 bg-todo-blue mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach out!
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10 max-w-5xl mx-auto">
          <div className="lg:w-2/5 space-y-2">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            
            <ContactInfo 
              icon={Phone} 
              title="Phone" 
              content="+254768322488" 
              href="tel:+254768322488" 
            />
            
            <ContactInfo 
              icon={Mail} 
              title="Email" 
              content="shadrackmeshack7@gmail.com" 
              href="mailto:shadrackmeshack7@gmail.com" 
            />
            
            <ContactInfo 
              icon={MapPin} 
              title="Location" 
              content="Nairobi, Kenya" 
              href="https://maps.google.com/?q=Nairobi,Kenya" 
            />
            
            <div className="pt-8">
              <h3 className="text-xl font-semibold mb-4">Resume</h3>
              <Button className="bg-todo-blue hover:bg-todo-blue/90 w-full justify-center">
                <Download className="mr-2 h-4 w-4" /> Download CV
              </Button>
            </div>
            
            <div className="pt-8">
              <h3 className="text-xl font-semibold mb-4">Social Media</h3>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-gray-100 p-3 rounded-full hover:bg-todo-blue hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="#" 
                  className="bg-gray-100 p-3 rounded-full hover:bg-todo-blue hover:text-white transition-colors"
                >
                  <GitHub size={20} />
                </a>
                <a 
                  href="#" 
                  className="bg-gray-100 p-3 rounded-full hover:bg-todo-blue hover:text-white transition-colors"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:w-3/5 bg-white rounded-xl shadow-md p-8">
            <h3 className="text-xl font-semibold mb-6">Send me a message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-todo-blue focus:border-todo-blue"
                    placeholder="Your name" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-todo-blue focus:border-todo-blue"
                    placeholder="Your email" 
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-todo-blue focus:border-todo-blue"
                  placeholder="Subject" 
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-todo-blue focus:border-todo-blue"
                  placeholder="Your message" 
                ></textarea>
              </div>
              <Button type="submit" className="bg-todo-blue hover:bg-todo-blue/90 w-full justify-center">
                <Send className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
