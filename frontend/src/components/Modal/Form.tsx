import { useState } from "react";
import InputField from "../FormFields/InputField";
import Button from "../Buttons/Buttons";
import { useFormContext } from "@/Context/useFormContext";
import { useNavigate } from "react-router";
import axios from "axios";

import { updateUserUrl, createWithFormUrl, formObj } from "@/utils/constants";

const InputFields: React.FC = () => {
  const {
    toggleModal,
    handleInputChange,
    setIsLoading,
    setFormData,
    formData,
  } = useFormContext();
  const [error, setError] = useState(formObj);

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      setIsLoading(true);

      const response = await axios.post(createWithFormUrl, formData);

      console.log("POST request successful:", response.data);

      toggleModal();
      setFormData(formObj);
      navigate("/success");
      setError(formObj);
    } catch (error) {
      if (error?.response?.data?.error) {
        setError((prev) => ({
          ...prev,
          ...error.response.data.field_errors,
        }));
        console.log("Error:", error.response.data);
      } else {
        console.log("An unexpected error occurred:", error);
        setError((prev) => ({
          ...prev,
        }));
      }
    } finally {
      setIsLoading(false);
    }
  };

  const isEmpty = formData.name.trim() === "" || formData.email.trim() === "";

  return (
    <div className="w-full">
      <div id="name_and_phone" className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="w-full md:w-1/2">
          <InputField
            id="name"
            label="Name"
            name="name"
            placeholder="Your name"
            color="black"
            value={formData.name}
            onChange={handleInputChange}
            type="text"
            isRequired
            error={error.name}
          />
        </div>

        <div className="w-full md:w-1/2">
          <InputField
            id="phoneNumber"
            label="Phone Number"
            name="phoneNumber"
            color="black"
            placeholder="Your phone number"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            type="text"
            error={error.phoneNumber}
          />
        </div>
      </div>

      <div className="mb-8">
        <InputField
          id="emailAddress"
          label="Email Address"
          placeholder="Name@email.com"
          color="black"
          value={formData.email}
          onChange={handleInputChange}
          isRequired
          name="email"
          type="email"
          error={error.email}
        />
      </div>

      <Button
        onClickFunction={handleSubmit}
        text="Join waitlist"
        size="large"
        color={"black"}
        background={"accent"}
      />
    </div>
  );
};

export default InputFields;
