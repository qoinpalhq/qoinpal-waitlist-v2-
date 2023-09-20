import { useState } from "react";
import { Link } from "react-router-dom";
import QoinpalLogo from "../../assets/QoinpalLogo.svg"

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    console.log("clicked")

  };

  // Define navigation items
  const navItems = [
    { text: "FAQ's", url: "#faqs" },
    { text: "Contact", url: "#contact" },
  ];

  return (
    <nav className="py-4 px-8 flex justify-between items-center md:px-20">
      {/* Brand Logo */}
      <div className="text-white text-xl font-bold">
       <Link to="/"><img src={QoinpalLogo}/></Link>
      </div>

      {/* Navigation Items */}
      <div className="hidden md:flex space-x-6">
        {navItems.map((item, index) => (
          <a key={index} href={item.url} className="text-white">
            {item.text}
          </a>
        ))}
      </div>

      <div className="hidden md:block">
        <button className="bg-secondary px-4 py-2 rounded-full md:px-6">
          Join Waitlist
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="text-white text-2xl focus:outline-none"
        >
          &#8801;
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
