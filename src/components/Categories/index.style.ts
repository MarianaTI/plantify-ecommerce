import styled from "@emotion/styled";

export const Container = styled.div`
  background-color: #f9f9f9;
  width: 350px;
  height: 86px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  gap: 16px;
`;

export const Icon = styled.span`
    font-size: 34px;
    color: var(--tertiary-400);
`;

export const Title = styled.h4`
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  font-weight: 700;
  color: var(--default);
  margin: 0;
`;

export const Description = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: var(--tertiary-inverse);
`;
