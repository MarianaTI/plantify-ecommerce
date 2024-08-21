import React from "react";
import { Container } from "./index.style";

interface LocationProps {
  name: string;
  address: string;
  cp: string;
}

const LocationComponent: React.FC<LocationProps> = ({ name, address, cp }) => {
  return (
    <Container>
      <h1>{name}</h1>
      <span>{address}</span>
      <span>{cp}</span>
    </Container>
  );
};

export default LocationComponent;
