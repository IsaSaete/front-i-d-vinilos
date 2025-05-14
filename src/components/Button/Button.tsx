import type { ComponentProps } from "react";
import "./Button.css";

interface ButtonProps extends ComponentProps<"button"> {
  classNameModifier?: string;
  action: () => void;
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  action,
  classNameModifier,
  children,
  ...buttonProps
}) => {
  const nameModifier = classNameModifier ? `button--${classNameModifier}` : "";

  return (
    <button
      className={`button ${nameModifier}`}
      type={type}
      onClick={action}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
