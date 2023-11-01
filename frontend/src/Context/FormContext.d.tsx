import { Dispatch, SetStateAction, ChangeEvent } from "react";

export interface FormContextData {
  formData: {
    name: string;
    phoneNumber: string;
    email: string;
  };

  isOpen: boolean;

  isLoading: boolean;

  toggleModal: () => void;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setFormData: Dispatch<SetStateAction<FormContextData["formData"]>>;
}
