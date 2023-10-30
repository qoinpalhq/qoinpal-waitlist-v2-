import { FC } from "react";
import Form from "./Form";
import icon from "/assets/add.png";
import { useFormContext } from "@/Context/useFormContext";
const Modal: FC = () => {
  const { isOpen, toggleModal } = useFormContext();

  const display = `transform ${
    isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
  } transition-transform ease-in-out duration-300`;

  return (
    <div
      id="overlay"
      className={`fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        id="wrapper"
        role="dialog"
        aria-modal="true"
        aria-hidden="true"
        className={`bg-background rounded-[20px] px-[5%] py-[10%] md:p-20 w-[80%] grid place-items-center relative ${display}`}
      >
        <div id="icon" className="absolute top-4 md:top-10 right-4 md:right-10">
          <img src={icon} alt="close" width="100%" onClick={toggleModal} />
        </div>
        <div
          id="text"
          className="flex flex-col  items-center max-w-[500px] pb-8"
        >
          <h2 className="font-medium pb-3">Join the waitlist</h2>
          <p className="capitalize text-center subtitle font-light text-dark-gray">
            Be part of the first to enjoy the convenience of seamless crypto to
            fiat transactions on our secure and reliable platform
          </p>
        </div>

        <Form />
      </div>
    </div>
  );
};

export default Modal;
