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
  background-color: #eee;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10% 0;
  h3 {
    font-size: 30px;
    font-weight: 500;
  }
`;

export const Products = styled.div`
  width: 85%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 120px;
  padding: 32px 40px;
  margin-top: 40px;
`;

export const FertilizingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15% 0;
`;

export const Fertilizing = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 80%;
  height: 500px;
`;

export const Images = styled.section`
  display: flex;
  gap: 100px;
  padding: 0 48px;
  img {
    width: 100%;
    object-fit: cover;
    height: 90%;
    :last-child {
      align-self: flex-end;
    }
  }
`;

export const Tip = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 0 48px;
  gap: 12px;
  h4 {
    font-size: 32px;
    font-weight: 600;
    color: var(--default);
  }
  p {
    font-size: 14px;
    font-weight: 500;
    color: var(--secondary);
  }
`;

export const Parallax = styled.section`
  position: relative;
  background: #fff url("/images/parallax.png") fixed no-repeat 50% 50%;
  overflow: hidden;
  height: 350px;
  background-size: cover;
  margin: 6% 0;
`;

export const ParallaxContent = styled.div`
  color: var(--neutral);
  font-size: 22px;
  font-weight: 500;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  height: 50px;
  width: 100%;
  min-width: 400px;
  max-width: 450px;
  background-color: var(--neutral);
  border-radius: 15px;
  margin-top: 32px;
  input {
    height: 100%;
    width: 100%;
    background-color: transparent;
    padding: 10px 70px 10px 18px;
    font-size: 12px;
    line-height: 1.25rem;
    font-weight: 500;
    color: var(--default);
    outline: none;
    transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  }
  button {
    position: absolute;
    right: 10px;
    top: 8px;
    bottom: 8px;
    z-index: 10;
    color: var(--neutral);
    font-size: 12px;
    font-weight: 600;
    background-color: var(--secondary-500);
    border-radius: 10px;
    padding: 0 16px;
    transition: all 0.6s ease;
    :hover{
      background-color: var(--tertiary-500);
    }
  }
`;
