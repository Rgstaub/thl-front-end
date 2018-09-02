import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  font-family: 'roboto', sans-serif;
  font-size: 1.8rem;
`

export default (props) => {
  return(
    <StyledH1 {...props} />
  )
}