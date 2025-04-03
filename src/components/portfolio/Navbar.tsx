
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Tools", href: "#tools" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  // Function to close mobile menu and navigate to section
  const handleNavItemClick = (href: string) => {
    setIsMenuOpen(false);
    
    // Scroll to the section smoothly
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm border-b shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-bold text-lg">SHADRACK OTIENO</div>
        
        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <a 
                href={item.href} 
                className="text-gray-600 hover:text-todo-blue transition-colors"
              >
                {item.name}
              </a>
            </li>
          ))}
          <li>
            <Button variant="outline" className="border-todo-blue text-todo-blue hover:bg-todo-blue hover:text-white">
              <a href="#contact">Hire Me</a>
            </Button>
          </li>
        </ul>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-md py-4 px-4 animate-in slide-in-from-top duration-300">
          <ul className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href} 
                  className="text-gray-600 hover:text-todo-blue transition-colors block"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavItemClick(item.href);
                  }}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <Button 
                variant="outline" 
                className="w-full border-todo-blue text-todo-blue hover:bg-todo-blue hover:text-white"
                onClick={() => handleNavItemClick("#contact")}
              >
                Hire Me
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
