/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import vonLogo from 'images/logo.svg';
import ReactSVG from 'react-svg';
import { Flex } from 'components/Grid';
import { MainWrapper, Svg, Point1, Point2 } from './styles';
import Content from './Content';

export default class HomePage extends React.PureComponent {
  render() {
    return (
      <MainWrapper>
        <Flex justify="center" align="center" height="100%">
          <Svg>
            <ReactSVG path={vonLogo} />
          </Svg>
          <Content />
          <Point1>
            <span className="line1" />
            <span className="line2" />
            <span className="line3" />
          </Point1>
          <Point2>
            <span className="line1" />
            <span className="line2" />
            <span className="line3" />
          </Point2>
        </Flex>
      </MainWrapper>
    );
  }
}
