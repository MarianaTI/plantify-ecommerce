import CategoryComponent from "@/components/Category/Category";
import {
  CategoryContent,
  Container,
  Main,
  Parallax,
  ParallaxContent,
  Products,
} from "@/styles/Shop.style";
import React from "react";
import { category } from "../../constants";
import ProductComponent from "@/components/Product/Product";

export default function Shop() {
  return (
    <Container>
      <Parallax>
        <ParallaxContent>
          <h1>Products</h1>
          <div>
            <span>Shop</span>
            <span>&#183;</span>
            <span>Indoor</span>
          </div>
        </ParallaxContent>
      </Parallax>
      <Main>
        <CategoryContent>
          {category.map((cat, index) => (
            <CategoryComponent key={index} category={cat.name} />
          ))}
        </CategoryContent>
        <Products>
          <ProductComponent />
          <ProductComponent />
          <ProductComponent />
          <ProductComponent />
          <ProductComponent />
          <ProductComponent />
          <ProductComponent />
          <ProductComponent />
          <ProductComponent />
          <ProductComponent />
          <ProductComponent />
          <ProductComponent />
        </Products>
        <div>
          
        </div>
      </Main>
    </Container>
  );
}
