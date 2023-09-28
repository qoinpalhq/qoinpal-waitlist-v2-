interface ButtonProps {
  text: string;
  onClickFunction: () => void;
  size: 'small' | 'large'; // Size can be 'small' or 'large'
  color: string;
  background?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClickFunction, size, background = "primary", color, className }) => {
  // Determine the width class based on the size prop
  const widthClass = size === 'small' ? 'w-40'
                     : size === 'medium'?  'w-60' : 'w-full';

  const buttonClasses = `flex items-center justify-center border rounded-3xl bg-${background} ${widthClass} text-${color} p-3 ${
    className || ''
  }`;

  return (
    <button className={buttonClasses} onClick={onClickFunction}>
      {text}
    </button>
  );
};

export default Button;
