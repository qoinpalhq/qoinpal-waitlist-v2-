const Newsletters = () => {
    return (
        <div className="flex px-24 py-12">
            <div className="flex border  w-156 bg-[#111111] w-full h-96 rounded-3xl items-center justify-center">
                <div className="items-center flex flex-col justify-center w-full h-full">
                    <p className="text-center text-[#FFFFFF] leading-10 text-3xl mb-8">Be part of our waitlist!</p>
                    <p className="text-center text-[#BFBFBF] leading-6 text-lg mb-8">Sign up on Qoinpal’s waitlist to be the first to enjoy our services of borderless crypto <br /> to fiat and fiat to crypto transactions.</p>
                    <div className="bg-[#111111] border border-gray-200 rounded-full w-3/5 flex items-center justify-between h-14">
                        <div className="text-[#FAFFE6] px-4 font-medium text-base">
                            Enter your email address
                        </div>
                        <button className="bg-[#CCFB00] text-[#111111] font-medium px-4 py-2 rounded-r-full h-14 w-40">
                            Join waitlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletters
