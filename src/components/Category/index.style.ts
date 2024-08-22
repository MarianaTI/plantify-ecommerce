import styled from "@emotion/styled";

export const ButtonStyled = styled.button`
  background-color: #f0f0f0;
  padding: 8px 24px;
  border-radius: 24px;
  font-size: 14px;
  font-weight: 600;
  color: var(--default);
  box-shadow: 4px 4px 8px rgba(109, 109, 109, 0.25);
  :hover {
    background-color: var(--default);
    color: var(--neutral);
  }
`;
