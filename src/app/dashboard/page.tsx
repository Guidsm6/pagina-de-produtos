"use client"
import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/header';

const products = [
  { id: 1, name: 'Coffee Mug', description: 'Start your day with a smile!', price: 12.99 },
  { id: 2, name: 'T-Shirt', description: 'Show off your personal style!', price: 19.99 },
  { id: 3, name: 'Notebook', description: 'Capture your ideas and dreams!', price: 9.99 },
];

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  padding-0
  margin-0
  height: 100%; 
  background-color: #757575; 
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem; /* gap-3 */

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ProductCard = styled.div`
  background-color: white;
  border-radius: 0.5rem; 
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 8px; 
  padding: 1rem; 
`;

const ProductButton = styled.button`
  width: 100%;
  background-color: #3182ce; 
  color: white;
  font-weight: bold;
  padding: 0.5rem 1rem; 
  border-radius: 0.25rem; 

  &:hover {
    background-color: #3b99e5; 
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #1565c0; 
  }
`;

function Dashboard() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <Container>
      <Header />
      <Main>
        <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
        <h2 className="text-2xl mb-6">Products</h2>
        <ProductGrid>
          {products.map((product) => (
            <ProductCard key={product.id}>
              <ProductButton onClick={() => setSelectedProduct(product)}>
                {product.name}
              </ProductButton>
            </ProductCard>
          ))}
        </ProductGrid>
        {selectedProduct && (
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Product Details</h3>
            <p>Name: {selectedProduct.name}</p>
            <p>Description: {selectedProduct.description}</p>
            <p>Price: ${selectedProduct.price}</p>
          </div>
        )}
      </Main>
    </Container>
  );
}

export default Dashboard;
