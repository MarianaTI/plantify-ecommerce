import ButtonComponent from "@/components/Button/Button";
import CategoriesComponent from "@/components/Categories/Categories";
import ProductComponent from "@/components/Product/Product";
import {
  ButttonContainer,
  CategoriesContainer,
  Container,
  Fertilizing,
  FertilizingContainer,
  Images,
  ImageStyled,
  Information,
  InputContainer,
  Main,
  MainContent,
  Parallax,
  ParallaxContent,
  ProductContainer,
  Products,
  SectionStyled,
  Tip,
  Top,
  TopContent,
} from "@/styles/Home.style";
import { useRouter } from "next/router";
import React from "react";
import { FaTruckFast } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import { PiUsersThreeFill } from "react-icons/pi";

export default function Home() {
  const router = useRouter();

  const navigateToShop = () => {
    router.push("/shop");
  };

  const navigateToUs = () => {
    router.push("/about");
  };

  return (
    <Container>
      <Main>
        <MainContent>
          <Information>
            <h1>
              <span className="color">Plants</span>, your daily dose of calm...
            </h1>
            <p>
              Our store offers a wide selection of species adapted to different
              environments, along with care tips and gardening accessories to
              help you create your own green oasis at home.
            </p>
            <ButttonContainer>
              <ButtonComponent
                text="See more"
                secondary
                onClick={navigateToUs}
              />
              <ButtonComponent text="Buy now" onClick={navigateToShop} />
            </ButttonContainer>
          </Information>
          <ImageStyled>
            <img src="/images/main.png" />
          </ImageStyled>
        </MainContent>
      </Main>
      <CategoriesContainer>
        <CategoriesComponent
          icon={GiTakeMyMoney}
          title="Best Prices"
          description="Discover the best prices and exclusive offers on our products."
        />
        <CategoriesComponent
          icon={FaTruckFast}
          title="Fast and Free Shipping"
          description="Enjoy fast and free shipping on all orders over $200."
        />
        <CategoriesComponent
          icon={PiUsersThreeFill}
          title="Excellent Customer Service"
          description="Our customer service is available 24/7 to assist you with anything you need."
        />
      </CategoriesContainer>
      <SectionStyled>
        <Top>
          <TopContent>
            <span className="top">Top products</span>
            <h2>Plants for interior</h2>
            <button onClick={navigateToShop}>Show more</button>
          </TopContent>
          <img src="/images/photo.png" />
        </Top>
        <Top>
          <TopContent>
            <span className="top">Top products</span>
            <h2>Outdoor plants</h2>
            <button onClick={navigateToShop}>Show more</button>
          </TopContent>
          <img src="/images/lavander.png" />
        </Top>
      </SectionStyled>
      <ProductContainer>
        <h3>New products</h3>
        <Products>
          <ProductComponent />
          <ProductComponent />
          <ProductComponent />
          <ProductComponent />
          <ProductComponent />
          <ProductComponent />
          <ProductComponent />
          <ProductComponent />
        </Products>
      </ProductContainer>
      <FertilizingContainer>
        <Fertilizing>
          <Images>
            <img src="/images/tip1.jpg" />
            <img src="/images/tip2.jpg" />
          </Images>
          <Tip>
            <h4>Fertilizing</h4>
            <p>
              Feed your plants with the appropriate fertilizer during their
              growing season (usually spring and summer). Using the right type
              of fertilizer provides essential nutrients that promote healthy
              growth and vibrant blooms.
            </p>
            <p>
              Be sure to follow the instructions on the fertilizer packaging for
              the correct type and frequency to avoid over-fertilizing, which
              can harm your plants. Proper fertilization helps your plants
              thrive and maintain their beauty throughout the growing season.
            </p>
          </Tip>
        </Fertilizing>
      </FertilizingContainer>
      <Parallax>
        <ParallaxContent>
          <span>Have questions or need assistance?</span>
          <span>
            Email us at plantify@gmail.com and we’ll be happy to help!
          </span>
          <InputContainer>
            <input placeholder="Write here... " type="email"/>
            <button type="button">Send</button>
          </InputContainer>
        </ParallaxContent>
      </Parallax>
    </Container>
  );
}
