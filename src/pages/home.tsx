import ButtonComponent from "@/components/Button/Button";
import {
  ButttonContainer,
  Container,
  ImageStyled,
  Information,
  Main,
  MainContent,
} from "@/styles/Home.style";
import { useRouter } from "next/router";
import React from "react";

export default function Home() {
  const router = useRouter();

  const navigateToShop = () => {
    router.push("/shop");
  }

  const navigateToUs = () => {
    router.push("/about");
  }

  return (
    <Container>
      <Main>
        <MainContent>
          <Information>
            <h1><span className="color">Plants</span>, your daily dose of calm...</h1>
            <p>Our store offers a wide selection of species adapted to different environments, along with care tips and gardening accessories to help you create your own green oasis at home.</p>
            <ButttonContainer>
              <ButtonComponent text="See more" secondary onClick={navigateToUs}/>
              <ButtonComponent text="Buy now" onClick={navigateToShop}/>
            </ButttonContainer>
          </Information>
          <ImageStyled>
            <img src="/images/main.png" />
          </ImageStyled>
        </MainContent>
      </Main>
    </Container>
  );
}
