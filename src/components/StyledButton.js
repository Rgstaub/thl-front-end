//eslint-disable import/first
import React from 'react';
import styled from 'styled-components'
// import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

StyledButton.propTypes = {

};

const ButtonStyle = styled.div`
  float: right;
`


function StyledButton(props) {
  const {text, disabled, onClick} = props;
  return (
    <div>
      <ButtonStyle>
        <Button
        color='primary'
        variant='contained'
        disabled={disabled}
        onClick={onClick}
        >
          {text}
        </Button>
      </ButtonStyle>
      <div style={{clear: 'both'}}></div>
    </div>
  )
}

export default StyledButton;