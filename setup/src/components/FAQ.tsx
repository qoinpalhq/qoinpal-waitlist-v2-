/* eslint-disable react-refresh/only-export-components */
import arrowdown from "../../assets/arrow-down.png"

const FAQ = () => {
    return (
        <div className="">
            <h1 className="flex items-center justify-center text-bold text-[#111111] mb-20 ">FAQs</h1>
            <div className="flex items-center justify-center flex-col">
                <div className="flex flex-col border rounded-2xl border-[#BFBFBF]] w-[1035px] mb-6">
                    <div className="flex items-center justify-between px-4 my-8 ">
                        <p className="">What is Qoinpal?</p>
                        <img src={arrowdown} alt="" />
                    </div>
                </div>
                <div className="flex flex-col border rounded-2xl border-[#BFBFBF]] w-[1035px] mb-6">
                    <div className="flex items-center justify-between px-4 my-8 ">
                        <p className="">How does Qoinpal work?</p>
                        <img src={arrowdown} alt="" />
                    </div>
                </div>
                <div className="flex flex-col border rounded-2xl border-[#BFBFBF]] w-[1035px] mb-6">
                    <div className="flex items-center justify-between px-4 my-8 ">
                        <p className="">No wallet? How do i transact in crypto?</p>
                        <img src={arrowdown} alt="" />
                    </div>
                </div>
                <div className="flex flex-col border rounded-2xl border-[#BFBFBF]] w-[1035px] mb-6">
                    <div className="flex items-center justify-between px-4 my-8 ">
                        <p className="">Is there an invoice system in place? </p>
                        <img src={arrowdown} alt="" />
                    </div>
                </div>
                <div className="flex flex-col border rounded-2xl border-[#BFBFBF]] w-[1035px] mb-6">
                    <div className="flex items-center justify-between px-4 my-8 ">
                        <p className="">How can I stay in touch with the official launch?</p>
                        <img src={arrowdown} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FAQ