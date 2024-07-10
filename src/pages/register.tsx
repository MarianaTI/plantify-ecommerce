import InputComponent from "@/components/Input/Input";
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
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ButtonComponent from "@/components/Button/Button";

interface FormValues {
  username: string;
  email: string;
  password: string;
}

export default function Register() {
  const [isShowPassword, setShowPassword] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!isShowPassword);
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

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
          <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <div>
              <h1>Sign Up</h1>
              <span>
                Create an account to save your favorite plants, receive
                personalized recommendations, and get early access to special
                promotions
              </span>
            </div>
            <Form>
            <InputComponent
                fullWidth
                control={control}
                name="name"
                label="Username"
              />
            <InputComponent
                fullWidth
                control={control}
                name="email"
                label="Email"
              />
            <InputComponent
                fullWidth
                control={control}
                name="password"
                label="Password"
                type={isShowPassword ? "text" : "password"}
                icon={
                  isShowPassword ? (
                    <IoEyeOffSharp onClick={togglePasswordVisibility} />
                  ) : (
                    <IoEyeSharp onClick={togglePasswordVisibility} />
                  )
                }
              />
              <ButtonComponent
                fullWidth
                text="Sign up"
                type="submit"
              />
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
