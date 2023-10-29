import { motion } from "framer-motion";
import HeroImage from "../../assets/HeroImage.svg";
import EnterEmail from "@/components/EnterEmail";
import { fadeIn, slideIn } from "../utils/motion";
const HeroSection = () => {
  return (
    <div className="min-h-[90vh] flex flex-col items-center relative overflow-hidden">
      <motion.section
        className="flex-grow py-20 md:py-12 flex flex-col justify-center"
        variants={fadeIn("tween", 0, 3)}
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
      >
        <div className="flex flex-col gap-y-6 items-center justify-center md:p-10 text-center">
          <h2 className="font-brightFlicks font-medium text-secondary md:text-5xl ">
            Seamless Borderless <br /> crypto-fiat transactions
          </h2>
          <p className="text-light-gray">
            Be part of the first to enjoy the convenience of seamless <br />
            crypto to fiat transactions on our secure and reliable platform
          </p>
        </div>
        <EnterEmail
          placeholder="Enter your Email Address"
          buttonText="Submit"
        />
      </motion.section>
      <motion.section
        className="w-screen px-10 flex justify-center"
        variants={slideIn("up", "tween", 0, 2)}
        initial="hidden"
        animate="show"
      >
        <img src={HeroImage} className="" alt="Hero Image" />
      </motion.section>
    </div>
  );
};

export default HeroSection;
