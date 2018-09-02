//eslint-disable import/first
import React from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
// import Button from '@material-ui/core/Button';

// StyledLink.propTypes = {

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


// function StyledLink(props) {
//   const {text, href, onClick} = props;
//   return (
//     <Link 
//       onClick={onClick}
//     >
//       {text}
//     </Link>
//   )
// }

// const _Link = (props) => {
//   return (
//     <StyledLink to={props.to}>
//       {props.text}
//     </StyledLink>
//   )
// }

export default (props) => <StyledLink {...props} />;