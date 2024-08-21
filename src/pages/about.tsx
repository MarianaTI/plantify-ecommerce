import LocationComponent from "@/components/Location/Location";
import {
  Container,
  Content,
  LocationContainer,
  Main,
  Map,
  MapContainer,
  Section,
} from "@/styles/AboutUs.style";
import React from "react";
import { location } from "../../constants";

export default function AboutUs() {
  return (
    <Container>
      <Main>
        <div>
          <h1>About us</h1>
          <p>
            Founded with a love for nature and a commitment to quality, Plantify
            offers a wide range of plants and gardening essentials delivered
            right to your doorstep. Our mission is to make plant care
            accessible, enjoyable, and rewarding for everyone.
          </p>
        </div>
        <div>
          <img src="/images/about-us.png" alt="about-me" />
        </div>
      </Main>
      <Section>
        <div>
          <h2>+300</h2>
          <span>types of plants</span>
        </div>
        <div>
          <h2>120</h2>
          <span>locations</span>
        </div>
        <div>
          <h2>100%</h2>
          <span>quality in every plant we sell</span>
        </div>
      </Section>
      <MapContainer>
        <h3>Plantify locations</h3>
        <Content>
          <LocationContainer>
            {location.map((loc) => (
              <LocationComponent
                name={loc.name}
                address={loc.address}
                cp={loc.cp}
              />
            ))}
          </LocationContainer>
          <Map/>
        </Content>
      </MapContainer>
    </Container>
  );
}
