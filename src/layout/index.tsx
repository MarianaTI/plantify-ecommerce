import { FC, ReactNode } from "react";
import styled from "@emotion/styled";
import Navbar from "@/components/Navbar/Navbar";
import { useRouter } from "next/router";

const StyledLayout = styled.div<{ hasNotLayout: boolean }>`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: ${({ hasNotLayout }) => (hasNotLayout ? '0' : '56px')}; 
`;

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const navbarStyled =
    router.pathname === "/" || router.pathname === "/register";

  return (
    <StyledLayout hasNotLayout={navbarStyled}>
      <Navbar />
      <div>{children}</div>
    </StyledLayout>
  );
};

export default Layout;
