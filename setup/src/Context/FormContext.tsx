import React, { createContext, useState, ReactNode, useContext } from 'react';

// Define the shape of your context data here
interface FormContextData {
  formData: {
    name: string;
    phoneNumber: string;
    emailAddress: string;
  };
  updateFormData: (data: Partial<FormContextData['formData']>) => void;
}

export const FormContext = createContext<FormContextData | undefined>(undefined);

export const FormContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<FormContextData['formData']>({
    name: '',
    phoneNumber: '',
    emailAddress: '',
  });

  const updateFormData = (data: Partial<FormContextData['formData']>) => {
    setFormData((prevData) => ({
      ...prevData,
      ...data,
    }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
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
