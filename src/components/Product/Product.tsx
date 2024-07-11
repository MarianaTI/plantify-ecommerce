import React from 'react';
import StarsComponent from '../Stars';
import { Container } from './index.style';

const ProductComponent = () => {
    return (
        <Container>
            <img src='/images/plant1.png'/>
            <StarsComponent rating={3}/>
            <h1>Peace Lily</h1>
            <span>$ 800.00</span>
        </Container>
    );
}

export default ProductComponent;
