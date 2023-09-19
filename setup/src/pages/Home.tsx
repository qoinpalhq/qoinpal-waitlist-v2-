import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"
import Newsletters from "../components/Newsletters"

const Home = () => {
    return (
      <div>
        <section className="min-h-screen bg-black">
          <Navbar />
          <HeroSection />
        </section>
        <Newsletters />
      </div>
    );
}

export default Home