import Congratulations from "../components/Congratulations"
import FAQ from "../components/FAQ"
import Footer from "../components/Footer"
import MobileNewsLetter from "../components/MobileNewsLetter"
import Newsletters from "../components/Newsletters"

const Home = () => {
    return (
        <div>
            <Newsletters />
            <MobileNewsLetter />
            <FAQ />
            <Congratulations />
            <Footer />
        </div>
    )
}

export default Home