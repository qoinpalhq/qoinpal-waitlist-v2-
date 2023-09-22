import copyright from "../../assets/tabler_copyright.png"
import X from "../../assets/simple-icons_x.png"
import IG from "../../assets/cib_instagram.png"
import telegram from "../../assets/la_telegram-plane.png"
import linkedin from "../../assets/basil_linkedin-outline.png"
const MobileFooter = () => {
    return (
        <div className="flex flex-row items-center justify-center">
            <div className="flex flex-col px-20 py-5">
                <div className="flex flex-row items-center justify-center gap-8 mb-8">
                    <img src={X} alt="" />
                    <img src={IG} alt="" />
                    <img src={telegram} alt="" />
                    <img src={linkedin} alt="" />
                </div>
                <div className="flex flex-row gap-2 items-center justify-center">
                    <img src={copyright} alt="" />
                    <p className="flex text-xl text-[#1F1F1F] ">Qoinpal 2023</p>
                </div>
            </div>
        </div>
    )
}
export default MobileFooter