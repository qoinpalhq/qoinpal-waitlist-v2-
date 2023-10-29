import { motion } from "framer-motion";

interface ButtonProps {
  text: string;
  onClickFunction: () => void;
  size: "small" | "large"; // Size can be 'small' or 'large'
  color: string;
  background?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClickFunction,
  size,
  background = "primary",
  color,
  className,
}) => {
  // Determine the width class based on the size prop
  const widthClass =
    size === "small" ? "w-40" : size === "large" ? "w-60" : "w-full";

  const buttonClasses = `flex items-center justify-center border rounded-3xl bg-${background} ${widthClass} text-${color} p-3 ${
    className || ""
  }`;

  return (
    <motion.button
      className={buttonClasses}
      onClick={onClickFunction}
      whileHover={{ scale: 1.1 }}
    >
      {text}
    </motion.button>
  );
};

export default Button;
