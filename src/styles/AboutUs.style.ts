import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 100px;
  & div:first-child {
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    h1 {
      color: var(--default);
      font-size: 56px;
      font-weight: 800;
    }
    p {
      color: var(--tertiary-inverse);
      font-size: 14px;
      font-weight: 500;
      width: 85%;
    }
  }
  & div:last-child {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Section = styled.section`
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  margin: 180px 0;
  & div {
    width: 300px;
  }
  h2 {
    color: var(--secondary-500);
    font-size: 48px;
    font-weight: 800;
  }
  span {
    color: #1f1f1f;
    font-size: 16px;
    font-weight: 600;
  }
`;

export const MapContainer = styled.div`
  h3 {
    text-align: center;
    font-size: 32px;
    color: var(--default);
    font-weight: 600;
  }
`;

export const Content = styled.div`
  height: 500px;
  margin: 64px 0;
  display: flex;
`;

export const LocationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: center;
  height: 100%;
  width: 800px;
  padding-left: 100px;
`;

export const Map = styled.div`
  width: 100%;
  background-color: var(--tertiary-100);
`;
