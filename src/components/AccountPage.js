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
const Content = styled.p`
  font-family: 'roboto', sans-serif;
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.6);
  margin-top: 0px;
`
const RightAligned = styled.span`
  float: right;
  color: rgba(0, 0, 0, 0.85);
`

export default class AccountPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
  
    }
  }

componentWillReceiveProps

  render() {
    return (
      <Frame>
        <Title>{this.props.username}'s Account Page</Title>

        <Frame>
          <Content>Username: 
            <RightAligned>{this.props.username}</RightAligned>
          </Content>
          <Content>Battle.net ID: 
            <RightAligned>{this.props.bnetId}</RightAligned>
          </Content>
          <Content>Email: 
            <RightAligned>{this.props.email}</RightAligned>
          </Content>
        </Frame>
      </Frame>
    )
  }
}
