//eslint-disable import/first
import React from 'react';
// import PropTypes from 'prop-types';
// import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
// import ('./Dashboard.css');

// Dashboard.propTypes = {
//   classname: PropTypes.string
// };

const Frame = styled.div`
  padding: 20px;
`
const Title = styled.h2`
  font-family: 'roboto', sans-serif;
  font-size: 1.4rem;
  font-weight: normal;
  color: rgba(0, 0, 0, 0.87);
  margin-bottom: 0px;
  margin-top: 0px;
`
const SubTitle = styled.p`
  font-family: 'roboto', sans-serif;
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.6);
  margin-top: 0px;
`

export default class StreamsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
  
    }
  }

componentWillReceiveProps

  render() {
    
    return (
      <Frame>
        <Title>{this.props.username}'s Streams Page</Title>
        <SubTitle>Coming Soon&trade;</SubTitle>
      </Frame>
    )
  }
}
