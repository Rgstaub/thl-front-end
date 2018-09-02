//eslint-disable import/first
import React from 'react';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import StyledButton from '../subcomponents/StyledButton';
import _Link from '../subcomponents/_Link';
import P from '../subcomponents/P';
import Typography from '@material-ui/core/Typography';
import Post from '../utilities/Post';
import styled from 'styled-components';


export default class ForgotPasswordPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: null,
      validEmail: false,
    }
  
  }

  handleEmailChange = (e) => {
    this.setState({email: e.target.value})
    this.validateEmail(e.target.value) ?
      this.setState({validEmail: true})
      : this.setState({validEmail: false})
  }

  handleSubmit = () => {
    Post('/reset-password', {
      email: this.state.email, 
    })
    .then( response => {
      console.log("Response from handleSubmit:\n", response)
      this.handleResponse(response);
    })
    // .catch( err => console.log(err))
  }

  handleResponse = (response) => {
    if (response && response.err) {
      this.setState({registrationErrors: response.err})
    } else {
      this.props.setPage('login')
      this.props.displayAlert('Registration successful', 2500, 'info')
    }
  }

  registrationErrors() {
    return this.state.registrationErrors.map( (error, index) => {
      return <P key={index} text={error} style={'alert'}/>
    })
  }

  validateEmail = (str) => {
    // eslint-disable-next-line
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(str) ? true : false
  }


  render() {
    return (
      <div className='login-page'>
        <Typography variant='title'>Enter your email address</Typography>
        <form>
        <FormControl className='input-group' fullWidth >
          <InputLabel>Email</InputLabel>
          <Input name='email' type='email' onChange={this.handleEmailChange}/>
        </FormControl>
       

        <StyledButton
          onClick={this.handleSubmit}
          disabled={!(this.state.validEmail && 
                      this.state.validPassword && 
                      this.state.validBnetId && 
                      this.state.validPassword && 
                      this.state.validConfirmPassword)}
          text='Submit'
        >
          Submit
        </StyledButton>
        </form>
        <_Link to='/login/'>Login</_Link>
      </div>
    )
  }

}

ForgotPasswordPage.propTypes = {
  setPage: PropTypes.func
};