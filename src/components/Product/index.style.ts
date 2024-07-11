import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 210px;
  height: auto;
  cursor: pointer;
  box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 16px;
  transition: background-color 0.5s ease, transform 0.5s ease;
  :hover {
    transform: translateY(-15px);
  }
  img {
    height: 250px;
    object-fit: cover;
    background-color: #f9f9f9;
  }
  h1 {
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    font-weight: 500;
  }
  span {
    font-size: 16px;
    font-weight: 600;
  }
`;
