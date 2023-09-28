import { useEffect, useState } from "react";
import Congratulations from "../components/Congratulations"
import MobileCongratulations from "../components/MobileCongratulations";
import MobileFooter from "../components/MobileFooter";
import Footer from "../components/Footer";

const Success = () => {
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
        <div className="overflow-hidden">
            {isMobile ? (
                <>
                    <MobileCongratulations />
                    <MobileFooter />
                </>
            ): (
                <>
                    <Congratulations />
                    <Footer />
                </>
            )}
        </div>
    )
}
export default Success