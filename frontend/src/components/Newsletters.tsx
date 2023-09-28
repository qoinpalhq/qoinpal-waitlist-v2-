import { useState } from "react";
import EnterEmail from "/src/components/EnterEmail"

const Newsletters = () => {
    
    

    return (
        <div className="flex justify-center px-7 md:px-24  py-7 md:py-12">
            <div className="flex border flex-col w-full md: w-[90%] bg-[#111111]  h-96 rounded-3xl items-center justify-center">
            <div className = "p-4"> 
             <div className="flex flex-col justify-center items-center mb-10">
                    <h1 className="text-white font-medium font-['Red Hat Display'] mb-8 leading-normal ">
                        Be part of our waitlist
                    </h1>
                    <p className="flex text-[#BFBFBF] text-center justify-center">
                        Sign up on Qoinpal’s waitlist to be the first to enjoy our services of borderless crypto <br /> to fiat and fiat to crypto transactions.
                    </p>
                </div>
                
            
  
                
                
                <EnterEmail buttonText = "Join Waitlist"   placeholder="Enter your email address"/> 
            </div> 
            
               
            </div>
        </div>


        
    )
}

export default Newsletters
