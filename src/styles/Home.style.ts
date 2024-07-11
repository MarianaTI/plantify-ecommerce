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

export const CategoriesContainer = styled.div`
  margin: 116px;
  padding: 0 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SectionStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
`;

export const Top = styled.section`
  background-color: var(--default-inverse);
  height: 250px;
  width: 520px;
  margin: 72px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const TopContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  .top {
    width: 115px;
    color: var(--tertiary);
    font-size: 12px;
    font-weight: 600;
    text-align: left;
  }
  h2 {
    width: 115px;
    text-align: left;
    font-size: 22px;
    font-weight: 600;
  }
  button {
    width: 115px;
    text-align: left;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    ::before {
      content: "";
      position: absolute;
      top: 100%;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--secondary-400);
      transition: 0.5s;
    }
    :hover::before {
      width: 62%;
    }
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 48px 0;
  h3 {
    font-size: 30px;
    font-weight: 500;
  }
`;