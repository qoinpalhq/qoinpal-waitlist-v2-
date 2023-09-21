

import  { useState, FC } from 'react';
import InputField from "./FormFields/InputField"

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ isOpen = true, onClose }) => {
  if (!isOpen) return null;

  const closeModal = () => {
    onClose();
  };

  return (
    <div id="overlay" className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div
        role="dialog"
        aria-modal="true"
        aria-hidden="true"
        className="bg-background rounded-[20rem]"
      >
      <div> 
        <h2 className="">Join the waitlist</h2>
        <p className = "capitalize"> Be part of the first to enjoy the convenience of seamless crypto to fiat transactions on our secure and reliable platform</p>
        <div> 
         <InputField 
         placeholder = "Your name"
         />
         <InputField />
         <InputField />
        </div>
      
      </div>
    
      </div>
    </div>
  );
};

export default Modal;
