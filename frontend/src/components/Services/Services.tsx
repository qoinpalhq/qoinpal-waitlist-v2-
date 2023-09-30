import Image1 from "/assets/send_receive_fast.png";
import Image2 from "/assets/Transact.svg";
import offerImage from "/assets/offerImage.svg";
import Button from "/src/components/Buttons/Buttons"
import data from "./data";
import Step from "./Step"
import { JSX } from "react/jsx-runtime";
import {useFormContext} from "/src/Context/FormContext";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../../utils/motion";

export default function Services() {
 

  const {toggleModal} = useFormContext()
  return (
    <section
      id="wrapper"
      className="bg-background  flex flex-col items-center px-7 md:px-15 lg:px-24 py-7 md:py-24 "
    >
      <div
        id="top"
        className="flex flex-col md:flex-row gap-20 space-between w-full pb-24 md:pb-32"
      >
        <motion.div
          id="left"
          className="w-full md:w-3/5"
          initial="hidden"
          whileInView="show"
          variants={slideIn("left", "spring", 0.2, 1)}
          exit="hidden"
        >
          <h2 className="font-medium"> {data.title}</h2>
          <p className="subtitle font-light pt-6 pb-7">{data.body}</p>
          <Button
            text="Sign up on the waitlist"
            color="white"
            background="black"
            size="medium"
            onClickFunction={toggleModal}
          />
        </motion.div>

        <motion.div
          id="right"
          className="flex items-center"
          initial="hidden"
          whileInView="show"
          variants={slideIn("right", "spring", 0.2, 2)}
          exit="hidden"
        >
          <img src={offerImage} alt="" className="align-end" />
        </motion.div>
      </div>

      <h2 className="font-medium pb-10 md:pb-16"> Transact in 3 easy steps</h2>

      <div
        id="bottom"
        className="flex flex-col flex-col-reverse md:flex-row space-between gap-14 md:gap-20"
      >
        <motion.div
          id="left"
          className=""
          initial="hidden"
          whileInView="show"
        >
          <img src={Image2} alt="transaction" className="" />
        </motion.div>

        <div id="right">
          {data.steps.map((x: JSX.IntrinsicAttributes, index: number) => (
            <Step {...x} end={index === data.steps.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
//done