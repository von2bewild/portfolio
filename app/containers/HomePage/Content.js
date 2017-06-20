import React from 'react';
// import styled from 'styled-components';
import Typist from 'react-typist';
import { H1 } from 'components/Text';
import { ContentWrapper } from './styles';

class Content extends React.PureComponent {
  state = {
    isContentHidden: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isContentHidden: false });
    }, 4000);
  }

  renderContent = () => {
    if (!this.state.isContentHidden) {
      return (
        <ContentWrapper>
          <Typist
            avgTypingDelay={150}
            cursor={{ show: false }}
            startDelay={1000}
          >
            <H1 size="5em">Need animator?</H1>
          </Typist>
          <Typist
            avgTypingDelay={150}
            cursor={{ show: false }}
            startDelay={5000}
          >
            <H1 size="5em">Hire me!</H1>
          </Typist>
          <Typist
            avgTypingDelay={150}
            cursor={{ show: false }}
            startDelay={7000}
          >
            <H1 size="2em" margin="100px 0 0 0">
              Road to Bangkok 2017! - von2bewild
            </H1>
          </Typist>
        </ContentWrapper>
      );
    }
    return null;
  };

  render() {
    return this.renderContent();
  }
}

export default Content;
