import { useState } from "react";

const Newsletters = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setEmail("");
        console.log("Submitted:", email);
    };

    return (
        <div className="hidden md:flex px-24 py-12">
            <div className="flex border flex-col  w-156 bg-[#111111] w-full h-96 rounded-3xl items-center justify-center">
                <div className="flex flex-col justify-center items-center mb-10">
                    <h1 className="text-white text-4xl font-medium font-['Red Hat Display'] mb-8 leading-normal tracking-wide">
                        Be part of our waitlist
                    </h1>
                    <p className="flex text-[#BFBFBF] text-center justify-center">
                        Sign up on Qoinpal’s waitlist to be the first to enjoy our services of borderless crypto <br /> to fiat and fiat to crypto transactions.
                    </p>
                </div>
                <div className="flex w-[650px] border rounded-3xl h-14 flex-row rounded-r-3xl">
                    <input
                        type="email"
                        className="items-start px-8 text-base w-[481px] rounded-l-3xl text-white bg-transparent"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button className="flex items-center justify-center w-[169px] bg-[#CCFB00] text-neutral-900 text-sm font-medium font-['Red Hat Display'] leading-[16.80px] tracking-tight rounded-r-3xl" 
                    type="submit" 
                    onClick={handleSubmit}
                    >
                        Join Waitlist
                    </button>
                </div>
            </div>
        </div>

        // <div className="min-h-[90vh] flex flex-col items-center relative overflow-hidden">
        //     <section className="flex-grow bg-redpy-20 md:py-12 flex flex-col justify-center">
        //         <div className="flex flex-col gap-y-6 items-center justify-center md:p-10 text-center">
        //             <h2 className="font-brightFlicks font-medium text-secondary md:text-5xl ">
        //                 Seamless Borderless <br /> crypto-fiat transactions
        //             </h2>
        //             <p className="text-light-gray">
        //                 Be part of the first to enjoy the convenience of seamless <br />
        //                 crypto to fiat transactions on our secure and reliable platform
        //             </p>
        //         </div>
        //         <form onSubmit={handleSubmit}>
        //             <div className="">
        //                 <InputField
        //                     placeholder="Enter your email address"
        //                     value={email}
        //                     onChange={setEmail}
        //                     hasButton={true}
        //                     buttonText="Join waitlist"
        //                     type="email"
        //                 />
        //             </div>
        //         </form>
        //     </section>
        //     <section className="w-screen px-10 flex justify-center">
        //         <img src={HeroImage} className="" alt="Hero Image" />
        //     </section>
        // </div>
    )
}

export default Newsletters
