import Image1 from "/assets/send_receive_fast.png";
import Image2 from "/assets/Transaction.png";
import data from "./data";
import Step from "./Step"
import { JSX } from "react/jsx-runtime";


export default function Services(){
  return (
    <div id = "wrapper" className= " bg-background  flex flex-col items-center px-24 pt-24 "> 
  
    <div id = "top" className = "flex gap-20 space-between w-full pb-32"> 
        <div id = "left" className = "w-4/5">
          <h2 className = "font-medium"> {data.title}
          </h2>
          <p className = "subtitle font-light pt-6 pb-7">{data.body}</p>
          <button className = "bg-primary text-white px-10 py-5 rounded-full">
          Sign up on the waitlist
          </button>
        </div>
        
        <div id = "right" className = "flex items-center"> 
          <img src = {Image1} alt = "" className = "align-end"/>
        </div>
    </div>
    
    
    
    
     <h2 className = "font-medium pb-20"> Transact in 3 easy steps</h2>
     
       <div id = "bottom" className = "flex space-between gap-20"> 
        <div id = "left" className = "">
         <img src = {Image2}  alt = "transaction" className = "" />
        </div>
        
        <div id = "right">
          {data.steps.map((x: JSX.IntrinsicAttributes,index: number) => <Step {...x} end = {index === data.steps.length - 1} />)}
        </div>
      </div>
   
</div>

  )
}