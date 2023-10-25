import { useEffect, useState } from "react";

import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer";
import MobileFAQ from "../components/FAQ/MobileFAQ";

import Newsletters from "../components/Newsletters";
import MobileFooter from "../components/MobileFooter";
import Services from "../components/Services/Services"
import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"
import Modal from "../components/Modal/Modal"
import Loading from "../components/Loading"
import {useFormContext} from "/src/Context/FormContext";

const Home = () => {
const {  isLoading} = useFormContext();
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
        <div className="overflow-x-hidden">
        {isLoading && (
                    <section className="min-h-screen bg-black">
               <Loading /> 
    
            </section>
        )}
        {!isLoading && (
        <>
                    <section className="min-h-screen bg-black">
                <Navbar />
                
                <HeroSection />
            </section>
            <Services />
              
            <Newsletters  />
                <Modal />
                    <FAQ />
            {isMobile ? <MobileFooter /> :   <Footer />
            }
            
          </>
            )
        }

        </div>
    );
};

export default Home;
