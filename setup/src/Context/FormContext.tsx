import React, { createContext, useState, ReactNode, useContext } from 'react';


interface FormContextData {
  formData: {
    name: string;
    phoneNumber: string;
    emailAddress: string;
  };
  updateFormData: (data: Partial<FormContextData['formData']>) => void;
  isOpen: boolean; 
  toggleModal: () => void; 
}


export const FormContext = createContext<FormContextData | undefined>(undefined);

export const FormContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<FormContextData['formData']>({
    name: '',
    phoneNumber: '',
    emailAddress: '',
  });

  const [isOpen, setIsOpen] = useState(true); 
  
  const updateFormData = (data: Partial<FormContextData['formData']>) => {
    setFormData((prevData) => ({
      ...prevData,
      ...data,
    }));
  };

  const toggleModal = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const contextValue: FormContextData = {
    formData,
    updateFormData,
    isOpen,
    toggleModal,
  };

  return (
    <FormContext.Provider value={contextValue}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = (): FormContextData => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error('useFormContext must be used within a FormContextProvider');
  }

  return context;
};
