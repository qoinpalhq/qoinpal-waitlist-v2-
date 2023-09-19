import Congratulations from "../components/Congratulations"
import FAQ from "../components/FAQ"
import Footer from "../components/Footer"
import Newsletters from "../components/Newsletters"

const Home = () => {
    return (
        <div>
            <Newsletters />
            <FAQ />
            <Congratulations />
            <Footer />
        </div>
    )
}

export default Home