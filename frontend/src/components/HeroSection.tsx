import HeroImage from "../../assets/HeroImage.svg";
import EnterEmail from "/src/components/EnterEmail"

const HeroSection = () => {
  
  

  return (
    <div className="min-h-[90vh] flex flex-col items-center relative overflow-hidden">
      <section className="flex-grow py-20 md:py-12 flex flex-col justify-center">
        <div className="flex flex-col gap-y-6 items-center justify-center md:p-10 text-center">
          <h2 className="font-brightFlicks font-medium text-secondary md:text-5xl ">
            Seamless Borderless <br /> crypto-fiat transactions
          </h2>
          <p className="text-light-gray">
            Be part of the first to enjoy the convenience of seamless <br />
            crypto to fiat transactions on our secure and reliable platform
          </p>
        </div >
        <EnterEmail placeholder = "Enter your Email Address" buttonText = "Submit"/> 
      </section>
      <section className="w-screen px-10 flex justify-center">
        <img src={HeroImage} className="" alt="Hero Image" />
      </section>
    </div>
  );
};

export default HeroSection;
