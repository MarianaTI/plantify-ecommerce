import React from "react";
import { ButtonStyled } from "./index.style";

interface ButtonProps {
  text: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  disabled?: boolean;
  secondary?: boolean;
}

const ButtonComponent: React.FC<ButtonProps> = ({
  text,
  onClick,
  type = "button",
  fullWidth = false,
  disabled = false,
  secondary = false,
}) => {
  return (
    <ButtonStyled
      onClick={onClick}
      fullWidth={fullWidth}
      type={type}
      disabled={disabled}
      secondary={secondary} 
    >
      {text}
    </ButtonStyled>
  );
};

export default ButtonComponent;
