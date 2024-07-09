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

export default function Login() {
  return (
    <Container>
      <ContainerFormStyled>
        <Content>
          <FormContainer>
            <div>
              <h1>Log In</h1>
              <span>
                Log in to your account to explore our wide range of over 300
                plant varieties, access your order history, and enjoy exclusive
                member benefits.
              </span>
            </div>
            <Form>
              <input />
              <input />
              <button />
            </Form>
            <div>
              <span>
                New to Plantify?
                <a href="/register" className="register">
                  Sign Up
                </a>
              </span>
            </div>
          </FormContainer>
          <ImageContainer>
            <Image
              src="/images/login.jpg"
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
