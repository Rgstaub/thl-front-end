//eslint-disable import/first
import React from 'react';
// import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import StyledButton from '../subcomponents/StyledButton';
import Link from '../subcomponents/Link';
import H1 from '../subcomponents/H1';
import Post from '../utilities/Post'
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import ('./LoginPage.css');

// LoginPage.propTypes = {
//   classname: PropTypes.string
// };


export default class LoginPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: null,
      validEmail: false,
      password: null,
      validPassword: false,
      failedLogin: false
    }

  }


  handleEmailChange = (e) => {
    this.setState({ email: e.target.value })
    if (this.validateEmail(e.target.value)) {
      this.setState({ validEmail: true })
    } else {
      this.setState({ validEmail: false })
    }
  }

  handlePasswordChange = (e) => {
    this.setState({password: e.target.value})
    this.validatePassword(e.target.value)
      ? this.setState({validPassword: true})
      : this.setState({validPassword: false})
  }

  handleSubmit = () => {
    console.log("\n\nBout to Post");
    Post('/login', {email: this.state.email, password: this.state.password})
    .then( response => {
      console.log("################# POST RESPONSE ################")
      console.log(response)
      this.handleResponse(response);
    })
  }

  handleResponse = (response) => {
    console.log(response);
  }

  
  
  validateEmail = (str) => {
    // eslint-disable-next-line
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(str) ? true : false
  }

  validatePassword = (str) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(str) ? true : false
  }

  errorMessage = () => {
    if (this.state.failedLogin) {
      return (
        <p>Incorrect email address or password</p>
      )
    }
  }


  render() {
    return (
      <div className='login-page'>
        <H1>Login</H1>
        <form>
        <FormControl className='input-group' fullWidth >
          <InputLabel>Email</InputLabel>
          <Input name='email' onChange={this.handleEmailChange}/>
        </FormControl>
        <FormControl className='input-group' fullWidth>
          <InputLabel>Password</InputLabel>
          <Input name='password' onChange={this.handlePasswordChange}/>
        </FormControl>
        <Link to='/forgot-password/'>...forgot password?</Link>
        <StyledButton
          className='login-button'
          onClick={this.handleSubmit}
          disabled={!(this.state.validEmail && this.state.validPassword)}
          text={'Login'}
        >
          Login
        </StyledButton>
        <Link to='/register/'>Register</Link>
        {this.errorMessage()}
        </form>
      </div>
    )
  }
}
