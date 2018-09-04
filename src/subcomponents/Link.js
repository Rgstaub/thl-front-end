//eslint-disable import/first
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

// _Link.propTypes = {

// };

const StyledLink = styled(Link)`
  cursor: pointer;
  font-family: 'roboto', sans-serif;
  color: #0B62A4;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`

export default (props) => {
  return(
    <StyledLink {...props} />
  )
}  