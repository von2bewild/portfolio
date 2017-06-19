import styled, { keyframes } from 'styled-components';
import { colors } from 'themes/variables';

const animate1 = keyframes`
  from {
    transform: rotateY(40deg);
    transform-origin: 0 0 0;
    opacity: 0;
    visibility: hidden;
  }
  to {
    transform: rotateY(0deg);
    opacity: 1;
    visibility: visible;
  }
`;
const animate2 = keyframes`
  from {
    transform: rotateY(40deg);
    transform-origin: 100% 100% 0;
    opacity: 0;
    visibility: hidden;
  }
  to {
    transform: rotateY(0deg);
    opacity: 1;
    visibility: visible;
  }
`;

export const MainWrapper = styled.section`
  position: relative;
  text-align: center;
  background: ${colors.black[0]};

  svg {
    width: 250px;
    height: 200px;
    position: relative;

    .cls-1{
      opacity: 0;
      visibility: hidden;
      position: absolute;
    }
    .line-1{
      animation: ${animate1} .3s linear forwards;
    }
    .line-2{
      animation: ${animate1} .3s .3s linear forwards;
    }
    .line-3{
      animation: ${animate2} .3s .6s linear forwards;
    }
    .line-4{
      animation: ${animate2} .3s .9s linear forwards;
    }
  }
`;
