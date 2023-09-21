import React, { FC } from 'react';
import InputFields from './InputFields';
import icon from '/assets/add.png';
import { useFormContext } from '/src/Context/FormContext';
const Modal: FC = () => {
  const { isOpen, toggleModal } = useFormContext();

  if (!isOpen) return null;

  return (
    <div id="overlay" className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div
        id="wrapper"
        role="dialog"
        aria-modal="true"
        aria-hidden="true"
        className="
          bg-background rounded-[20px]
          px-[5%] py-[10%] md:p-20
          w-[80%] grid place-items-center 
          relative
        "
      >
        <div id="icon" className="absolute top-4 md:top-10 right-4 md:right-10">
          <img src={icon} alt="close" width="100%" onClick={toggleModal} /> 
        </div>
        <div id="text" className="flex flex-col  items-center max-w-[500px] pb-8">
          <h2 className="font-medium pb-3">Join the waitlist</h2>
          <p className="capitalize text-center subtitle font-light text-dark-gray">
            Be part of the first to enjoy the convenience of seamless crypto to fiat transactions on our secure and reliable platform
          </p>
        </div>

        <InputFields />
      </div>
    </div>
  );
};

export default Modal;
