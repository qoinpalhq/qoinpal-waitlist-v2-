import React from 'react';
import InputField from '../FormFields/InputField';
import Button from '../Buttons/Buttons';
import { useFormContext } from '../../Context/FormContext';
import {useNavigate} from "react-router";
import axios from "axios";
import {updateUserUrl,  createWithFormUrl , formObj} from "/src/utils/constants";

const InputFields: React.FC<InputFieldsProps> = () => {

const {  toggleModal,handleInputChange, hasSubmittedEmail, setIsLoading,setFormData, formData} = useFormContext();

    const navigate = useNavigate();
    
    
    
const handleSubmit = async (event: React.FormEvent) => {
  event.preventDefault();
  

  try {
  setIsLoading(true);
  let response;
  if(hasSubmittedEmail){
    response = await axios.post(createWithFormUrl, formData, {
      headers: {
        'Content-Type': 'application/json', 
      },
    });
  }
  if(!hasSubmittedEmail){
response = await axios.put(updateUserUrl, formData, {
      headers: {
        'Content-Type': 'application/json', 
      },
    });
  }
    
    toggleModal();
  setFormData(formObj);
  navigate("/success");
  
console.log('POST request successful:', response.data);
  
  } catch (error) {
    console.error('Error:', error);
  }finally{
    setIsLoading(false)
  }

  
  
};



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
          value={formData.email}
          onChange={handleInputChange}
          isRequired
          name = "email"
          type = "email"
        />
      </div>

      <Button onClickFunction={handleSubmit} text = "Join waitlist" size = "large" color = "black" background = "accent"/>
    </div>
  );
};

export default InputFields;
