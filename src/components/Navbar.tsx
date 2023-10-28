import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import QoinpalLogo from "../../assets/QoinpalLogo.svg";
import Button from './Buttons/Buttons';
import { useFormContext } from '/src/Context/FormContext';
import { motion} from "framer-motion";

const Navbar = () => {
  const { toggleModal } = useFormContext();

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
    <motion.nav className="h-[10vh] px-8 flex justify-between items-center relative md:px-20">
      {/* Brand Logo */}
      <div className="text-white text-xl font-bold">
        <Link to="/">
          <img src={QoinpalLogo} />
        </Link>
      </div>

      {/* Navigation Items */}
      <div className="hidden md:flex space-x-6">
        {navItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.url}
            className="text-white hover:text-accent hover:font-bold"
            whileHover={{ scale: 1.1 }}
          >
            {item.text}
          </motion.a>
        ))}
      </div>

      <div className="hidden md:block">
        <Button
          text="Join Waitlist"
          size="small"
          className="bg-secondary"
          color="black"
          onClickFunction={toggleModal}
        />
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
        <motion.div className="flex flex-col gap-10">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.url}
              className="text-white text-lg hover:text-accent hover:font-bold"
              onClick={() => setMobileMenuOpen(false)}
              whileHover={{ scale: 1.1 }}
            >
              {item.text}
            </motion.a>
          ))}
        </motion.div>
        <div className="">
          <Button
            text="Join Waitlist"
            onClickFunction={toggleModal}
            background="secondary"
            color="black"
            size="small"
          />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
