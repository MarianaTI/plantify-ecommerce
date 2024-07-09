import {
  Container,
  ContainerFormStyled,
  Content,
  Form,
  FormContainer,
  ImageContainer,
  LinksContainer,
  LinkStyled,
} from "@/styles/Login.style";
import Image from "next/image";
import React from "react";

export default function Register() {
  return (
    <Container>
      <ContainerFormStyled>
        <Content>
          <ImageContainer>
            <Image
              src="/images/register.jpg"
              fill
              sizes="100vw, 100vh"
              priority={false}
              loading="lazy"
              alt="login"
              style={{
                borderRadius: "50px",
                padding: "24px",
                objectFit: "cover",
              }}
            />
          </ImageContainer>
          <FormContainer>
            <div>
              <h1>Sign Up</h1>
              <span>
                Create an account to save your favorite plants, receive
                personalized recommendations, and get early access to special
                promotions
              </span>
            </div>
            <Form>
              <input />
              <input />
              <button />
            </Form>
            <div>
              <span>
                Already have an account?
                <a href="/" className="register">
                  Log in
                </a>
              </span>
            </div>
          </FormContainer>
        </Content>
      </ContainerFormStyled>
      <LinksContainer>
        <LinkStyled>
          <a>Terms & Conditions</a>
          <span>|</span>
          <a>Privacy Policy</a>
        </LinkStyled>
        <LinkStyled>
          <a href="https://www.facebook.com">Facebook</a>
          <span>|</span>
          <a href="https://www.instagram.com">Instagram</a>
        </LinkStyled>
      </LinksContainer>
    </Container>
  );
}
