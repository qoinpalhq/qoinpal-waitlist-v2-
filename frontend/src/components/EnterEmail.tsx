 
 import { useState } from "react";
import InputField from "/src/components/FormFields/InputField";
import {useFormContext} from "/src/Context/FormContext"
 
 interface Props {
 placeholder : string;
  buttonText: string;
}

 const EnterEmail: React.FC<Props> = ({buttonText,placeholder}) => {
   const [inputValue, setInputValue] = useState("");
const {  toggleModal,handleInputChange} = useFormContext();


const handleSubmit = (event: React.FormEvent) => {
  event.preventDefault();
  //some api function
  toggleModal();
  setInputValue("")
  
  };
  
   return(
     
  <form className = "pt-5" onSubmit={handleSubmit}>
          <div className="">
            <InputField
              placeholder = {placeholder}
              value={inputValue}
              onChange={(e) => {
              handleInputChange(e) 
              setInputValue(e.target.value)}}
              hasButton={true}
           buttonText =    {buttonText}
              
              type = "email"
              name = "emailAddress"
              
              
            />
          </div>
        </form>
     )
   
 }
 export default EnterEmail;