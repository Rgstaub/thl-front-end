//eslint-disable import/first
import React from 'react';
import styled from 'styled-components'
// import PropTypes from 'prop-types';
// import  from '@material-ui/core/';

// AlertBar.propTypes = {
//   classname: PropTypes.string
// };

const Bar = styled.div`
  ${props => props.variant === 'error' ?
    `background-color: red; color : #fff;`
    : ``
  }

  ${props => props.variant === 'info' ?
    `background-color: #084B7F; color: #fff;`
    : ``
  }
  box-sizing: border-box;
  text-align: center;
  line-height: 35px;
  z-index: -1000;
  font-size: 18px;
  font-family: 'roboto', sans-serif;
  transition: height .3s;
  ${props => props.isOpen ? 
    `height: 35px;` 
    : `height: 0px; transition: opacity 1s height .3s; opacity: 0;`}
`

function AlertBar(props) {
  const { isOpen, text, variant } = props;

  return (
    <Bar
      isOpen={isOpen}
      variant={variant}
    >
      {text}
    </Bar>
  )
} 

export default AlertBar;