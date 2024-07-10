import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Main = styled.main`
  background-color: var(--tertiary-50);
  height: 865px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainContent = styled.div`
  height: 650px;
  width: 85%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Information = styled.section`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  h1 {
    font-size: 48px;
    font-weight: 800;
    color: var(--default);
  }
  p {
    font-size: 14px;
    font-weight: 500;
    color: var(--secondary);
  }
  .color {
    font-size: 48px;
    font-weight: 800;
    color: var(--secondary-400);
  }
`;

export const ButttonContainer = styled.div`
  display: flex;
  gap: 24px;
`;

export const ImageStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
