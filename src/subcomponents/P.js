//eslint-disable import/first
import React from 'react';
import styled from 'styled-components'
// import PropTypes from 'prop-types';
// import Button from '@material-ui/core/Button';

P.propTypes = {

};

const Para = styled.p`
  font-family: 'roboto', sans-serif;
  color: #333;
  margin-top: .6rem;
  ${ props => props.variant === 'alert' ?
  ` color: red;
  ` : `` };
`

function P(props) {
  const content = props.text;
  return (
    <Para variant={props.style}>{content}</Para>
  )
}

export default P;