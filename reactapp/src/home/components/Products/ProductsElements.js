import styled from 'styled-components';

export const ProductsContainer = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  padding: 5rem calc((100vw - 1500px) / 2);
  background: #150f0f;
  color: #fff;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ProductCard = styled.div`
  margin: 0 1rem;
  line-height: 2;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  
  &:hover{
    background: #333;
    transform: scale(1.005);
  }
`;

export const ProductImg = styled.img`
  height: 250px;
  width: 250px;
  box-shadow: 5px 5px #fdc500;
  margin: 20px auto 10px auto;
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 3rem;
`;

export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 2rem;
  text-align: center;
  font-size: 14px;
`;

export const ProductDesc = styled.p`
  margin-bottom: 0.1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; 
  -webkit-box-orient: vertical;
`;

export const ProductPrice = styled.p`
  margin-bottom: 0.1rem;
  font-size: 1.5rem;
`;

export const ProductButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border:none;
  background: #e31837;
  color: #fff;
  margin: 7px 2px;
  transition: 0.2 ease-out;
  
  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;

export const PrtButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border:none;
  background: #e31837;
  color: #fff;
  margin: 10px 10px 10px 10px;
  transition: 0.2 ease-out;
  border-radius: 5px;
  
  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  height: 20px;
  width: 90px;
  margin: 15px 0px;
  justify-content: space-evenly;
  align-items: center;
`;