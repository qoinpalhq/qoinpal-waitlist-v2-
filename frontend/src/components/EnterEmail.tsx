import { useState } from "react";
import InputField from "@/components/FormFields/InputField";
import { useFormContext } from "@/Context/useFormContext";
import { createWithEmailUrl } from "@/utils/constants";
import axios from "axios";

interface Props {
  placeholder: string;
  buttonText: string;
}

const EnterEmail: React.FC<Props> = ({ buttonText, placeholder }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const { handleInputChange, toggleModal, setIsLoading } = useFormContext();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const postData = {
      email: inputValue,
    };

    try {
      setIsLoading(true);

      const response = await axios.post(createWithEmailUrl, postData);

      console.log("POST request successful:", response.data);
      setInputValue("");
      toggleModal();
      setError("");
    } catch (error) {
      if (error?.response?.data?.error) {
        setError(error.response.data.error);
        console.log("Error:", error.response.data.error);
      } else {
        console.log("An unexpected error occurred:", error);
        setError("An unexpected error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="pt-5" onSubmit={handleSubmit}>
      <div className="">
        <InputField
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => {
            handleInputChange(e);
            setInputValue(e.target.value);
          }}
          hasButton={true}
          buttonText={buttonText}
          type="email"
          name="email"
          error={error}
        />
      </div>
    </form>
  );
};
export default EnterEmail;
