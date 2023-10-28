import React from 'react';
import InputField from '../FormFields/InputField';
import Button from '../Buttons/Buttons';
import { useFormContext } from '../../Context/FormContext';
import {useNavigate} from "react-router"

const InputFields: React.FC<InputFieldsProps> = () => {
  const { formData, setFormData,toggleModal} = useFormContext();

const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const navigate = useNavigate();
const handleSubmit = () => {
  toggleModal();
  //some Api codd
  navigate("/success")
  
  
}

  return (
    <div className="w-full">
      <div id="name_and_phone" className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="w-full md:w-1/2">
          <InputField
            id="name"
            label="Name"
            name = "name"
            placeholder="Your name"
            color = "black"
            value={formData.name}
            onChange={handleInputChange}
           type = "text"
            isRequired 
          />
        </div>

        <div className="w-full md:w-1/2">
          <InputField
            id="phoneNumber"
            label="Phone Number"
            name = "phoneNumber"
            color = "black"
            placeholder="Your phone number"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            type = "text"
          />
        </div>
      </div>

      <div className="mb-8">
        <InputField
          id="emailAddress"
          label="Email Address"
          placeholder="Name@email.com"
color = "black"
          value={formData.emailAddress}
          onChange={handleInputChange}
          isRequired
          name = "emailAddress"
          type = "email"
        />
      </div>

      <Button onClickFunction={handleSubmit} text = "Join waitlist" size = "large" color = "black" background = "accent"/>
    </div>
  );
};

export default InputFields;
