import { useEffect, useState } from "react";
import Congratulations from "../components/Congratulations";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import MobileCongratulations from "../components/MobileCongratulations";
import MobileFAQ from "../components/MobileFAQ";
import MobileNewsLetter from "../components/MobileNewsLetter";
import Newsletters from "../components/Newsletters";
import MobileFooter from "../components/MobileFooter";
import Services from "../components/Services/Services"
import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"


const Home = () => {
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
        <div>
            <section className="min-h-screen bg-black">
                <Navbar />
                <HeroSection />
            </section>
            <Services />
            {isMobile ? (
                <>
                    <MobileNewsLetter />
                    <MobileFAQ />
                    <MobileCongratulations />
                    <MobileFooter />
                </>
            ) : (
                <>
                    
                    <Newsletters />
                    <FAQ />
                    <Congratulations />
                    <Footer />
                </>
            )}
        </div>
    );
};

export default Home;
