import styled from "@emotion/styled";
import css from "styled-jsx/css";

interface ButtonStyledProps {
  fullWidth?: boolean;
  secondary?: boolean;
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  margin: 16px 0;
  padding: 0 40px;
  cursor: pointer;
  border: none;
  height: 40px;
  border-radius: 10px;
  background-color: var(--secondary-400);
  font-family: "Montserrat", sans-serif;
  color: var(--neutral);
  font-weight: 600;
  font-size: 14px;
  transition: background-color 0.9s ease;
  :hover {
    background-color: var(--secondary-500);
  }
  ${(props) =>
    props.secondary &&
    `
      background-color: transparent;
      border: 1px solid var(--secondary-400);
      color: var(--secondary-400);
        :hover {
      background-color: var(--secondary-60);
  }
    `}
`;
