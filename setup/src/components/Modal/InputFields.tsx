import React from 'react';
import InputField from '../FormFields/InputField';
import Button from '../Buttons/Buttons';
import { useFormContext } from '../../Context/FormContext';

interface InputFieldsProps {
  onClose: () => void;
}

const InputFields: React.FC<InputFieldsProps> = ({ onClose }) => {
  const { formData, updateFormData } = useFormContext();

  const handleInputChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData({ [field]: event.target.value });
  };

  return (
    <div className="w-full">
      <div id="name_and_phone" className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="w-full md:w-1/2">
          <InputField
            id="name"
            label="Name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleInputChange('name')}
           type = "text"
            isRequired 
          />
        </div>

        <div className="w-full md:w-1/2">
          <InputField
            id="phoneNumber"
            label="Phone Number"
            placeholder="Your phone number"
            value={formData.phoneNumber}
            onChange={handleInputChange('phoneNumber')}
            type = "text"
          />
        </div>
      </div>

      <div className="mb-8">
        <InputField
          id="emailAddress"
          label="Email Address"
          placeholder="Name@email.com"
          value={formData.emailAddress}
          onChange={handleInputChange('emailAddress')}
          isRequired
          type = "email"
        />
      </div>

      <Button onClick={onClose} text = "Join waitlist" size = "large" color = "black" background = "accent"/>
    </div>
  );
};

export default InputFields;
