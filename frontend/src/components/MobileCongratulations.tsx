import tick from "../../assets/Tick.png"

const MobileCongratulations = () => {
    return (
        <div className="flex h-[926px] relative bg-neutral-900">
            <div className="w-[60px] h-[60px] left-[184px] top-[323px] absolute justify-center items-center inline-flex">
                <div className="w-[60px] h-[60px] relative">
                    {/* <div className="w-[60px] h-[60px] left-0 top-0 absolute bg-yellow-400 rounded-full" /> */}
                    <img src={tick} alt="" />
                </div>
            </div>
            <div className="w-[298px] left-[65px] top-[431px] absolute text-center text-white text-base font-normal font-['Red Hat Display'] leading-normal">Congratulations 🎉  <br />You’re part of the lucky ones to enjoy first hand borderless fiat-to-crypto exchange</div>
            <div className="left-[73px] top-[593px] absolute flex-col justify-center items-center gap-6 inline-flex">
                <div className="w-[283px] px-6 py-[18.50px] bg-lime-50 rounded-[30px] justify-center items-center gap-3 inline-flex">
                    <div className="text-right text-neutral-900 text-base font-medium font-['Red Hat Display'] leading-tight tracking-tight">Home</div>
                </div>
                <div className="text-white text-base font-medium font-['Red Hat Display'] capitalize leading-tight">Contact us</div>
            </div>
        </div>
    )
}
export default MobileCongratulations