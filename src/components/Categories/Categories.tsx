import React from "react";
import { Container, Description, Icon, Title } from "./index.style";

interface CategorieProps {
    icon: React.ElementType;
    title: string;
    description: string;
}

const CategoriesComponent: React.FC<CategorieProps> = ({
    icon: IconComponent,
    title,
    description,
}) => {
  return (
    <Container>
      <div>
        <Icon>
          <IconComponent />
        </Icon>
      </div>
      <div>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </div>
    </Container>
  );
};

export default CategoriesComponent;
