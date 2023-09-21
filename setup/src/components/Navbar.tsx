import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import QoinpalLogo from "../../assets/QoinpalLogo.svg";
import Button from "./Buttons/Buttons";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Define navigation items
  const navItems = [
    { text: "FAQ's", url: "#faqs" },
    { text: "Contact", url: "#contact" },
  ];

  return (
    <nav className="h-[10vh] px-8 flex justify-between items-center relative md:px-20">
      {/* Brand Logo */}
      <div className="text-white text-xl font-bold">
        <Link to="/">
          <img src={QoinpalLogo} />
        </Link>
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
        <Button text="Join Waitlist" background = "secondary" color = "black" size = "small" onclickFunction={() => {}} />
      </div>

      {/* Mobile Menu Icon */}
      <div className="absolute right-5 z-50 md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="text-white text-2xl focus:outline-none"
        >
          {isMobileMenuOpen ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile View */}
      <div
        className={`transition-all ease-out duration-500 ${
          isMobileMenuOpen
            ? "top-0 translate-y-0 opacity-100"
            : "-top-full opacity-0"
        } fixed h-screen overflow-hidden gap-y-10 w-full left-0 flex justify-center items-center text-center flex-col bg-black z-30 md:hidden`}
      >
        <div className="flex flex-col gap-10">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.url}
              className="text-white text-lg hover:text-accent hover:font-bold"
              onClick={()=>setMobileMenuOpen(false)}
            >
              {item.text}
            </a>
          ))}
        </div>
        <div className="">
          <Button text="Join Waitlist" onclickFunction={() => {}}  background= "secondary" color = "black" size = "small"/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
