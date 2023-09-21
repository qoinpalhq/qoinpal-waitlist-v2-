import React, { FC } from 'react';
import InputFields from './InputFields';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ isOpen = true, onClose }) => {
  if (!isOpen) return null;

  return (
    <div id="overlay" className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div
        role="dialog"
        aria-modal="true"
        aria-hidden="true"
        className="
          bg-background rounded-[20px]
          p-20
          w-[80%] grid place-items-center 
        "
      >
    
        <div id = "text" className = "flex flex-col  items-center max-w-[500px] pb-8"> 
         <h2 className="font-medium">Join the waitlist</h2>
          <p className="capitalize text-center subtitle font-light text-dark-gray">
            Be part of the first to enjoy the convenience of seamless crypto to fiat transactions on our secure and reliable platform
          </p>
        </div>
          
          <InputFields onClose={onClose} />
        
      </div>
    </div>
  );
};

export default Modal;
