interface ButtonProps {
    text:string;
    onclickFunction:() => void;
}

const Button: React.FC<ButtonProps> = ({text,onclickFunction}) => {
  return (
    <button className="flex items-center justify-center border rounded-3xl bg-secondary w-40 p-3" onClick={onclickFunction}>
      {text}
    </button>
  );
}

export default Button