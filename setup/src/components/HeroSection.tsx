import { useState } from "react";
import HeroImage from "../../assets/HeroImage.svg";
import InputField from "./FormFields/InputField";

const HeroSection = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setInputValue("");
    console.log("Submitted:", inputValue);
  };

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
        </div>
        <form onSubmit={handleSubmit}>
          <div className="">
            <InputField
              placeholder="Enter your email address"
              value={inputValue}
              onChange={setInputValue}
              hasButton={true}
              buttonText="Join waitlist"
              type = "email"
            />
          </div>
        </form>
      </section>
      <section className="w-screen px-10 flex justify-center">
        <img src={HeroImage} className="" alt="Hero Image" />
      </section>
    </div>
  );
};

export default HeroSection;
