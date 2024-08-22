import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Parallax = styled.section`
  position: relative;
  background: #fff url("/images/shop.jpg") fixed no-repeat bottom center;
  overflow: hidden;
  height: 350px;
  background-size: cover;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 0;
  }
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
  h1 {
    font-size: 48px;
    font-weight: 800;
  }
  div {
    display: flex;
    gap: 12px;
  }
  span {
    font-size: 16px;
    :first-child {
      font-weight: 600;
    }
    :last-child {
      font-weight: 400;
    }
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CategoryContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  margin: 72px 0;
  width: 95%;
`;

export const Products = styled.div`
  width: 85%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 120px;
  padding: 32px 40px;
`;
