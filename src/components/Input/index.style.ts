import styled from "@emotion/styled";

export const Label = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: var(--secondary);
  margin: 0;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const InputStyled = styled.input<{ fullWidth?: boolean }>`
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  height: 40px;
  border-radius: 10px;
  background-color: #E3E3E3;
  border: none;
  margin: 8px 0;
  color: var(--default);
  font-size: 12px;
  font-weight: 500;
  caret-color: var(--primary-500);
  &:focus {
    padding: 12px;
    outline: none;
    color: var(--default);
  }
  &:not(:focus) {
    padding: 12px;
    outline: none;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: 15px;
  top: 55%;
  transform: translateY(-48%);
  font-size: 20px;
  cursor: pointer;
  color: #BEBEBE;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 10px;
  font-weight: 400;
  margin: 0 16px;
`;
