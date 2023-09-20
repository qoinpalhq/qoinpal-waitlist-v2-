interface InputFieldProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  hasButton?: boolean;
  buttonText?: string;
  onSubmit?: () => void;
  isRequired?: boolean;
  label?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  value,
  onChange,
  hasButton = false,
  buttonText = "Submit",
  onSubmit,
  isRequired = false,
  label,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const handleButtonClick = () => {
    if (onSubmit) {
      onSubmit();
    }
  };

  return (
    <div className="relative">
      {label && (
        <label className="mb-2">
          {label}
          {isRequired && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        type="email"
        className="border border-gray-300 bg-transparent p-2 rounded-full w-full text-secondary mt-4 md:p-4 outline-none"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      {hasButton && (
        <button
          className="bg-accent border w-full rounded-full p-2 my-4 border-accent md:rounded-none md:rounded-r-full md:absolute md:right-0 md:bottom-0 md:px-10 md:w-fit md:py-4 md:my-0"
          onClick={handleButtonClick}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default InputField;
