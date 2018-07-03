//eslint-disable import/first
import React from 'react';
import styled from 'styled-components'
// import PropTypes from 'prop-types';
// import Button from '@material-ui/core/Button';

StyledLink.propTypes = {

};

const Link = styled.a`
  cursor: pointer;
  font-family: 'roboto', sans-serif;
  color: #0B62A4;
  :hover {
    text-decoration: underline;
  }
`


function StyledLink(props) {
  const {text, href, onClick} = props;
  return (
    <Link 
      onClick={onClick}
    >
      {text}
    </Link>
  )
}

export default StyledLink;