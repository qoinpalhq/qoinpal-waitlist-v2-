import { useState } from "react";
import InputField from "../components/FormFields/InputField";
import { useFormContext } from "../Context/FormContext";
import { createWithEmailUrl } from "../utils/constants";
import axios from "axios";

interface Props {
  placeholder: string;
  buttonText: string;
}

const EnterEmail: React.FC<Props> = ({ buttonText, placeholder }) => {
  const [inputValue, setInputValue] = useState("");
  const { toggleModal, handleInputChange, setHasSubmittedEmail, setIsLoading } =
    useFormContext();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const postData = {
      email: inputValue,
    };

<<<<<<< HEAD
    try {
      setIsLoading(true);
      console.log(createWithEmailUrl, postData);
      const response = await axios.post(createWithEmailUrl, postData);
      // toggleModal();
      // setInputValue("");
      // setHasSubmittedEmail(true);
=======
  try {
  setIsLoading(true);
  console.log('loading..')
    const response = await axios.post(createWithEmailUrl, postData, {
      headers: {
        'Content-Type': 'application/json', 
      },
    });
    toggleModal();
  setInputValue('');
  setHasSubmittedEmail(true);
  
console.log('POST request successful:', response.data);
  
  } catch (error) {
    console.error('Error:', error);
  }finally{
    setIsLoading(false)
  }
>>>>>>> 73e00bce71c329dcb534da2bf0d211f9d6f7af4b

      console.log("POST request successful:", response.data);
    } catch (error) {
      console.error("Error:", error);
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
        />
      </div>
    </form>
  );
};
export default EnterEmail;
