import { Dispatch, SetStateAction, ChangeEvent } from "react";

export interface FormContextData {
  formData: {
    name: string;
    phoneNumber: string;
    email: string;
  };
  error: {
    name: string;
    email: string;
  };

  isOpen: boolean;
  hasSubmittedEmail: boolean;
  isLoading: boolean;

  toggleModal: () => void;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  setHasSubmittedEmail: Dispatch<SetStateAction<boolean>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<FormContextData["error"]>>;
  setFormData: Dispatch<SetStateAction<FormContextData["formData"]>>;
}
