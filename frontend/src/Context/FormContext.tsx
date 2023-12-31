import React, { createContext, useState, ReactNode, ChangeEvent } from "react";
import { formObj } from "@/utils/constants";
import { FormContextData } from "./FormContext.d.tsx";

// Context
export const FormContext = createContext<FormContextData | undefined>(
  undefined
);

export const FormContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // State
  const [formData, setFormData] =
    useState<FormContextData["formData"]>(formObj);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

    setFormData,
    isLoading,
    setIsLoading,
  };

  // Return
  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
};
