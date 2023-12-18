import { useEffect, useState } from "react";

import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer";

import Newsletters from "../components/Newsletters";
import MobileFooter from "../components/MobileFooter";
import Services from "../components/Services/Services";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal/Modal";
import Loading from "../components/Loading";
import { useFormContext } from "@/Context/useFormContext";

const Home = () => {
  const { isLoading } = useFormContext();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 428);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 428);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="overflow-x-hidden overflow-y-hidden scroll-smooth">
      {/* {isLoading && (
        <section className="min-h-screen bg-black">
          <Loading />
        </section>
      )} */}

          <section className="min-h-screen bg-black">
            <Navbar />
            <HeroSection />
          </section>
          <Services />

          <Newsletters />
          <Modal />
          <FAQ />
          {isMobile ? <MobileFooter /> : <Footer />}

    </div>
  );
};

export default Home;
