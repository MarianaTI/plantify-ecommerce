import ButtonComponent from "@/components/Button/Button";
import CategoriesComponent from "@/components/Categories/Categories";
import {
  ButttonContainer,
  CategoriesContainer,
  Container,
  ImageStyled,
  Information,
  Main,
  MainContent,
} from "@/styles/Home.style";
import { useRouter } from "next/router";
import React from "react";
import { FaTruckFast } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import { PiUsersThreeFill } from "react-icons/pi";

export default function Home() {
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
      <CategoriesContainer>
        <CategoriesComponent icon={GiTakeMyMoney} title="Best Prices" description="Discover the best prices and exclusive offers on our products."/>
        <CategoriesComponent icon={FaTruckFast} title="Fast and Free Shipping" description="Enjoy fast and free shipping on all orders over $200."/>
        <CategoriesComponent icon={PiUsersThreeFill} title="Excellent Customer Service" description="Our customer service is available 24/7 to assist you with anything you need."/>
      </CategoriesContainer>
    </Container>
  );
}
