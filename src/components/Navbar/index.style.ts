import styled from "@emotion/styled";

export const StyledLink = styled.a`
  color: var(--default);
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  position: relative;
  border: none;
  background: none;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 400ms;
  transition-property: color;
  :focus::after,
  :hover::after {
    width: 100%;
    left: 0%;
  }
  ::after {
    content: "";
    pointer-events: none;
    bottom: -1px;
    left: 50%;
    position: absolute;
    width: 0%;
    height: 2px;
    background-color: var(--secondary-400);
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: width, left;
  }
`;

export const ButtonStyled = styled.button`
  background-color: var(--secondary-400);
  font-family: "Montserrat", sans-serif;
  color: var(--neutral);
  font-weight: 600;
  font-size: 14px;
  padding: 6px 16px;
  border-radius: 15px;
  transition: background-color 0.9s ease;
  :hover {
    background-color: var(--secondary-500);
  }
`;