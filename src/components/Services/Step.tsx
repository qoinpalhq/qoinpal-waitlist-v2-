import { delay, motion } from "framer-motion";
import { fadeIn, slideIn } from "../../utils/motion";

type Props = {
  num: string;
  title: string;
  subtext: string;
  end: boolean;
}

const Step:React.Fc <Props> = ({num,title,end,subtext}) => (
  <motion.div className = {`flex gap-5 md:gap-7 items-center relative py-2 ${!end && 'md:py-4 mb-10 md:mb-20'}`} initial="hidden" whileInView="show" variants={fadeIn("spring",1,2)}> 
  
     <span className = "color-dark-gray font-normal sm:text-xs md:text-sm">{num} </span>
    
    <div> 
     <h3 className = "font-medium"> {title} </h3>
     <p className = "subtext text-light-gray font-light"> {subtext} </p>
    </div>
    
    {!end &&(
    <div aria-hidden className = 'h-[40px] md:h-[80px] bg-light-gray w-[1px] absolute left-2 top-[100%] md:top-[100%]'> 
    </div>
    )
    }

  </motion.div>

)

export default Step