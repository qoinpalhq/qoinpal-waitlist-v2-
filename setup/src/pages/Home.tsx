import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"
import Services from "../components/Services/Services"
import Congratulations from "../components/Congratulations"
import FAQ from "../components/FAQ"
import Footer from "../components/Footer"
import MobileNewsLetter from "../components/MobileNewsLetter"
import Newsletters from "../components/Newsletters"

const Home = () => {
    return (
      <div>
        <section className="min-h-screen bg-black">
          <Navbar />
          <HeroSection />
        </section>
        <Services />
        <Newsletters />
        <MobileNewsLetter />
        <FAQ />
        <Congratulations />
        <Footer />
      </div>
    );
       

}

export default Home