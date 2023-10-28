import { useState } from "react";
import InputField from "/src/components/FormFields/InputField";
import { useFormContext } from "/src/Context/FormContext";

interface Props {
  placeholder: string;
  buttonText: string;
}

const EnterEmail: React.FC<Props> = ({ buttonText, placeholder }) => {
  const [inputValue, setInputValue] = useState("");
  const { toggleModal, handleInputChange } = useFormContext();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Create a data object with the email address
    const data = {
      email: inputValue,
    };

    try {
      const response = await fetch("http://localhost:8080/api/waitlist/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const json = await response.json();

      if (response.ok) {
        // if Request was successful
        console.log(json);
      } else {
        // if the Request failed
        console.error("Request failed");
      }
    } catch (error) {
      console.error("An error occurred while making the request:", error);
    }

    toggleModal();
    setInputValue("");
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
          name="emailAddress"
        />
      </div>
    </form>
  );
};

export default EnterEmail;
