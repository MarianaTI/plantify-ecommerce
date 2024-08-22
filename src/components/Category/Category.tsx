import React from "react";
import { ButtonStyled } from "./index.style";

interface CategoryProps {
  category: string;
}

const CategoryComponent: React.FC<CategoryProps> = ({ category }) => {
  return <ButtonStyled>{category}</ButtonStyled>;
};

export default CategoryComponent;
