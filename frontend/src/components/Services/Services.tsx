import Image1 from "/assets/send_receive_fast.png";
import Image2 from "/assets/Transaction.png";
import Button from "/src/components/Buttons/Buttons"
import data from "./data";
import Step from "./Step"
import { JSX } from "react/jsx-runtime";
import {useFormContext} from "/src/Context/FormContext"

export default function Services() {
  const {toggleModal} = useFormContext()
  return (
    <section id="wrapper" className="bg-background  flex flex-col items-center px-7 md:px-15 lg:px-24 py-7 md:py-24 ">

      <div id="top" className="flex flex-col md:flex-row gap-20 space-between w-full pb-24 md:pb-32">
        <div id="left" className="w-full md:w-3/5">
          <h2 className="font-medium"> {data.title}
          </h2>
          <p className="subtitle font-light pt-6 pb-7">{data.body}</p>
          <Button
          text= "Sign up on the waitlist"
          color = "white"
          background = "black"
          size = "medium"
          onClickFunction = {toggleModal}
          
          
          />
          
        </div>


        <div id="right" className="flex items-center">
          <img src={Image1} alt="" className="align-end" />

        </div>
      </div>


      <h2 className="font-medium pb-10 md:pb-16"> Transact in 3 easy steps</h2>


      <div id="bottom" className="flex flex-col flex-col-reverse md:flex-row space-between gap-14 md:gap-20">

        <div id="left" className="">
          <img src={Image2} alt="transaction" className="" />
        </div>

        <div id="right">
          {data.steps.map((x: JSX.IntrinsicAttributes, index: number) => <Step {...x} end={index === data.steps.length - 1} />)}
        </div>
      </div>

    </section>

  )
}
//done