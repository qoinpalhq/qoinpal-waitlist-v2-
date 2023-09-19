import copyright from '../../assets/tabler_copyright.png'
import Xicon from "../../assets/simple-icons_x.png"
import instagram from "../../assets/cib_instagram.png"
import telegram from "../../assets/la_telegram-plane.png"
import linkedin from "../../assets/basil_linkedin-outline.png"

const Footer = () => {
    return (
        <div className="px-24 py-4">
            <div className="flex justify-between items-center">
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
            </div>
        </div>
    );
};

export default Footer;
