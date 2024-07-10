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
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";
import Image from "next/image";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

/**
 * Esta interfaz define la estructura de los valores del formulario.
 * Proporciona una tipificación explícita para los datos del formulario.
 */

interface FormValues {
  email: string;
  password: string;
}

export default function Login() {
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

  /**
   * FormValues se pasa como tipo genérico para asegurar que el hook conoce
   * la estructura de los datos del formulario.
   */

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

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
            <Form onSubmit={handleSubmit(onSubmit)}>
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
