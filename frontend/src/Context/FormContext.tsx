import React, { createContext, useState, ReactNode, useContext, ChangeEvent, Dispatch, SetStateAction } from 'react';
import {formObj} from "/src/utils/constants";

// Types
interface FormContextData {
  formData: {
    name: string;
    phoneNumber: string;
    emailAddress: string;
  };
  isOpen: boolean;
  hasSubmittedEmail: boolean;
  loading: boolean;
  toggleModal: () => void;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  setHasSubmittedEmail: Dispatch<SetStateAction<boolean>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setFormData: Dispatch<SetStateAction<FormContextData['formData']>>; // Add this line
}


// Context
export const FormContext = createContext<FormContextData | undefined>(undefined);

export const FormContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // State
  const [formData, setFormData] = useState<FormContextData['formData']>(formObj);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const [hasSubmittedEmail, setHasSubmittedEmail] = useState(false);

  // Functions
  const toggleModal = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  

  // Value
  const contextValue: FormContextData = {
    formData,
    isOpen,
    toggleModal,
    handleInputChange,
    hasSubmittedEmail,
    setHasSubmittedEmail,
    setFormData,
    loading,
    setIsLoading,
  };

  // Return
  return (
    <FormContext.Provider value={contextValue}>
      {children}
    </FormContext.Provider>
  );
};

// Hook
export const useFormContext = (): FormContextData => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error('useFormContext must be used within a FormContextProvider');
  }

  return context;
};
