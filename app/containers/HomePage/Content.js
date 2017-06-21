import React from 'react';
import Typist from 'react-typist';
import { H1 } from 'components/Text';
import { ContentWrapper } from './styles';
import Product from './Product';

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
            startDelay={500}
          >
            <H1 size="5em">Need next level animations?</H1>
          </Typist>
          <Product />
          <Typist
            avgTypingDelay={150}
            cursor={{ show: false }}
            startDelay={8000}
          >
            <H1 size="2.5em" margin="40px 0 0 0">
              Road to Bangkok 2017! Lets do this!.. chos!
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
