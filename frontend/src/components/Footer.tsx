import copyright from '../../assets/tabler_copyright.png'
import Xicon from "../../assets/simple-icons_x.png"
import instagram from "../../assets/cib_instagram.png"
import telegram from "../../assets/la_telegram-plane.png"
import linkedin from "../../assets/basil_linkedin-outline.png"
import { motion } from 'framer-motion'
import { slideIn } from '../utils/motion'

const Footer = () => {
    return (
        <div className="px-24 py-4" id='contact'>
            <motion.div className="flex justify-between items-center" initial="hidden" whileInView="show" variants={slideIn("up","spring",0.4,3)}>
                <div className="flex gap-2 items-center">
                    <img src={copyright} alt="Copyright" />
                    <p>Qoinpal 2023</p>
                </div>
                <div className="flex gap-4 items-center">
                    <img src={Xicon} alt="X Icon" />
                    <img src={instagram} alt="Instagram Icon" />
                    <img src={telegram} alt="Telegram Icon" />
                    <img src={linkedin} alt="LinkedIn Icon" />
                </div>
            </motion.div>
        </div>
    );
};

export default Footer;
