

const MobileNewsLetter = () => {
    return (
        <div className="lg:hidden flex flex-col items-center justify-center px-4 py-10">
            <div className="flex flex-col bg-black items-center justify-center border rounded-2xl">
                <div className="flex flex-col items-center justify-center">
                    <p className="flex text-white text-xl items-center justify-center mt-9 mb-4">Be Part of our waitlist!</p>
                    <p className="w-[327px] text-center text-stone-300 text-sm font-normal font-['Red Hat Display'] leading-[21px] mb-8">Sign up on Qoinpal’s waitlist to be the first to enjoy our services of borderless crypto to fiat and fiat to crypto transactions.</p>
                    <div className="w-[358px] h-12 px-6 py-[15px] rounded-[30px] border border-stone-300 justify-start items-center gap-4 inline-flex mb-4">
                        <div className="text-stone-300 text-xs font-medium font-['Red Hat Display'] leading-[18px] tracking-wide">Enter your email address</div>
                    </div>
                    <div className="w-[358px] h-12 px-3 py-[15.50px] bg-[#CCFB00] rounded-[30px] justify-center items-center gap-2.5 inline-flex mb-10">
                        <div className="text-right text-neutral-900 text-sm font-medium font-['Red Hat Display'] leading-[16.80px] tracking-tight">Join waitlist</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MobileNewsLetter;