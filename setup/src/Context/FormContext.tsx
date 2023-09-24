import React, { createContext, useState, ReactNode, useContext } from 'react';

//types
interface FormContextData {
  formData: {
    name: string;
    phoneNumber: string;
    emailAddress: string;
  };
  
  isOpen: boolean; 
  toggleModal: () => void; 
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
 
}






//context
export const FormContext = createContext<FormContextData | undefined>(undefined);

export const FormContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  
  //state
  const [formData, setFormData] = useState<FormContextData['formData']>({
    name: '',
    phoneNumber: '',
    emailAddress: '',
  });
  
  const [isOpen, setIsOpen] = useState(false); 
  
  

//functions
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

// const handleSubmit = (event: React.FormEvent, func: Function) => {
//     event.preventDefault();
//     func()
  
//   };
  
  
  
  //value
  const contextValue: FormContextData = {
    formData,
    setFormData,
    isOpen,
    toggleModal,
    handleInputChange,
  
  };

  
  //return
  return (
    <FormContext.Provider value={contextValue}>
      {children}
    </FormContext.Provider>
  );
};





//hook
export const useFormContext = (): FormContextData => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error('useFormContext must be used within a FormContextProvider');
  }

  return context;
};
