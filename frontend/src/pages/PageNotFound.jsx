import React from 'react'
import Button from "../components/Buttons/Buttons"
import { useNavigate } from 'react-router-dom'; 
const PageNotFound = () => {
    const navigate = useNavigate();
  return (
    <div className="bg-black min-h-screen flex justify-center items-center md:text-4xl">
      <div className="flex flex-col items-center">
        <p className="text-secondary mb-5 text-6xl md:text-9xl">404</p>
        <p className="text-secondary mb-5 text-4xl">
          Page Not Found
        </p>
        <Button
          background="accent"
          text="Go Home"
          onClickFunction={() => {
            navigate("/");
          }}
        />
      </div>
    </div>
  );
}

export default PageNotFound