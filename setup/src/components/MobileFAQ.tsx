import arrowdown from "../../assets/arrow-down.png"

const MobileFAQ = () => {
    return (
        <div className="lg:hidden flex flex-col">
            <h1 className=" flex text-center justify-center mb-8">FAQs</h1>
                <div className="w-[380px] h-[72px] rounded-2xl border border-[#BFBFBF] justify-between items-center inline-flex mb-8 px-8">
                    <p className="text-neutral-900 text-base font-medium font-['Red Hat Display'] leading-tight">What is Qoinpal?</p>
                    <div className="w-6 h-6 justify-center items-center flex">
                        {/* <img  /> */}
                        <img src={arrowdown} alt="" className="w-6 h-6 relative"/>
                    </div>
                </div>
                <div className="w-[380px] h-[72px] rounded-2xl border border-[#BFBFBF] justify-between items-center inline-flex mb-8 px-8">
                    <p className="text-neutral-900 text-base font-medium font-['Red Hat Display'] leading-tight">How does Qoinpal work?</p>
                    <div className="w-6 h-6 justify-center items-center flex">
                        {/* <img  /> */}
                        <img src={arrowdown} alt="" className="w-6 h-6 relative"/>
                    </div>
                </div>
                <div className="w-[380px] h-[72px] rounded-2xl border border-[#BFBFBF] justify-between items-center inline-flex mb-8 px-8">
                    <p className="text-neutral-900 text-base font-medium font-['Red Hat Display'] leading-tight">No wallet? How do i transact in <br /> crypto?</p>
                    <div className="w-6 h-6 justify-center items-center flex">
                        {/* <img  /> */}
                        <img src={arrowdown} alt="" className="w-6 h-6 relative"/>
                    </div>
                </div>
                <div className="w-[380px] h-[72px] rounded-2xl border border-[#BFBFBF] justify-between items-center inline-flex mb-8 px-8">
                    <p className="text-neutral-900 text-base font-medium font-['Red Hat Display'] leading-tight">Is there an invoice system in place?</p>
                    <div className="w-6 h-6 justify-center items-center flex">
                        {/* <img  /> */}
                        <img src={arrowdown} alt="" className="w-6 h-6 relative"/>
                    </div>
                </div>
                <div className="w-[380px] h-[72px] rounded-2xl border border-[#BFBFBF] justify-between items-center inline-flex mb-8 px-8">
                    <p className="text-neutral-900 text-base font-medium font-['Red Hat Display'] leading-tight">How can i stay in touch with the <br /> official launch</p>
                    <div className="w-6 h-6 justify-center items-center flex">
                        {/* <img  /> */}
                        <img src={arrowdown} alt="" className="w-6 h-6 relative"/>
                    </div>
                </div>
        </div>
    )
}
export default MobileFAQ