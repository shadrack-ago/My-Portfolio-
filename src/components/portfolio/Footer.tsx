
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">SHADRACK OTIENO</h3>
            <p className="text-gray-400 mt-2">Virtual Assistant, UI/UX, Software Solution provider</p>
          </div>
          
          <div>
            <ul className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
              <li><a href="#home" className="hover:text-todo-blue transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-todo-blue transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-todo-blue transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-todo-blue transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-todo-blue transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="flex items-center justify-center gap-1 text-sm text-gray-400">
            © {currentYear} Shadrack Otieno. Made with <Heart size={16} className="text-red-500" fill="currentColor" /> in Kenya
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
