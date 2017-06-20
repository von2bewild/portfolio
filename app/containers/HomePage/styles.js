import styled, { keyframes } from 'styled-components';
import { colors, position } from 'themes/variables';

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

const logoColor = keyframes`
  from {
    fill: ${colors.white[0]};
  }
  to {
    fill: ${colors.black[0]};
  }
`;

export const MainWrapper = styled.section`
  position: fixed;
  height: 100%;
  width: 100%;
  text-align: center;
  background: ${colors.black[0]};
  padding: 50px;
  font-size: 10px;

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
      animation: ${animate1} .3s .5s linear forwards, ${logoColor} .3s 2.2s linear forwards;
    }
    .line-2{
      animation: ${animate1} .3s .8s linear forwards, ${logoColor} .3s 2.2s linear forwards;
    }
    .line-3{
      animation: ${animate2} .3s 1.2s linear forwards, ${logoColor} .3s 2.2s linear forwards;
    }
    .line-4{
      animation: ${animate2} .3s 1.5s linear forwards, ${logoColor} .3s 2.2s linear forwards;
    }
  }
`;

const logo = keyframes`
  0% {
    top: 0%;
    transform: scale(1, 1);
    background: transparent;
  }
  70% {
    top: -50%;
    transform: scale(0.3, 0.3);
    background: transparent;
  }
  100% {
    top: -50%;
    transform: scale(0.3, 0.3);
    background: ${colors.white[0]};
  }
`;

export const Svg = styled.div`
  position: relative;
  z-index: 100;
  animation: ${logo} .5s 2s linear forwards;
`;

const width = keyframes`
  from {
    width: 1%;
    height: 1px;
  }
  to {
    width: 100%;
    height: 1px;
  }
`;

const height = keyframes`
  from {
    width: 1px;
    height: 0%;
  }
  to {
    width: 1px;
    height: 100%;
  }
`;

export const Point1 = styled.span`
  position: absolute;
  top: 0;
  left: 50%;
  display: block;
  width: 50%;
  height: 100%;

  > span {
    background: ${colors.white[0]};
  }
  > .line1 {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    animation: ${width} .5s 2.5s linear forwards;
  }
  > .line2 {
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 0;
    animation: ${height} .5s 3s linear forwards;
  }
  > .line3 {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 0;
    animation: ${width} .5s 3.5s linear forwards;
  }
`;
export const Point2 = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 50%;
  height: 100%;

  > span {
    background: ${colors.white[0]};
  }
  > .line1 {
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 0;
    animation: ${width} .5s 2.5s linear forwards;
  }
  > .line2 {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    animation: ${height} .5s 3s linear forwards;
  }
  > .line3 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 0;
    animation: ${width} .5s 3.5s linear forwards;
  }
`;

export const ContentWrapper = styled.section`
  position: absolute;
  ${position.centerXY};
  color: ${colors.white[0]};
  width: 100%;
`;
