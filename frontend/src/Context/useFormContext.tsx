// Hook
import { useContext } from "react";
import { FormContext } from "./FormContext.tsx";

import { FormContextData } from "./FormContext.d.tsx";

export const useFormContext = (): FormContextData => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error("useFormContext must be used within a FormContextProvider");
  }

  return context;
};
