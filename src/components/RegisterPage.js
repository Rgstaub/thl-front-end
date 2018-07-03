//eslint-disable import/first
import React from 'react';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import StyledButton from './StyledButton';
import StyledLink from './StyledLink';
import Typography from '@material-ui/core/Typography';
import Post from '../utilities/Post';
import styled from 'styled-components';
import ('./LoginPage.css');


export default class RegisterPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: null,
      validEmail: false,
      username: null,
      validUsername: false,
      password: null,
      validPassword: false,
      confirmPassword: null,
      validConfirmPassword: false,
      bnetId: null,
      validBnetId: false
    }
  
  }




  handleEmailChange = (e) => {
    this.setState({email: e.target.value})
    this.validateEmail(e.target.value) ?
      this.setState({validEmail: true})
      : this.setState({validEmail: false})
  }

  handlePasswordChange = (e) => {
    this.setState({password: e.target.value})
    this.validatePassword(e.target.value)
      ? this.setState({validPassword: true})
      : this.setState({validPassword: false})
  }

  handleUsernameChange = (e) => {
    this.setState({username: e.target.value})
    if (e.target.value.length > 1) {
      this.setState({validUsername: true})
    } else {
      this.setState({validUsername: false})
    }

  }

  handleBnetIdChange = (e) => {
    this.setState({bnetId: e.target.value})
    this.validateBnetId(e.target.value)
      ? this.setState({validBnetId: true})
      : this.setState({validBnetId: false})
  }

  handleConfirmPasswordChange = (e) => {
    this.setState({confirmPassword: e.target.value})
    if (e.target.value === this.state.password) {
      this.setState({validConfirmPassword: true}) 
    } else {
      this.setState({validConfirmPassword: false})
    }
  }



  handleSubmit = () => {
    Post('public/register', {
      email: this.state.email, 
      username: this.state.username,
      bnetId: this.state.bnetId,
      password: this.state.password
    })
    .then( response => {
      this.handleResponse(response);
    })
    // .catch( err => console.log(err))
  }

  handleResponse = (response) => {
    if (response.error) {
      this.props.displayAlert(response.error.message, 2500, 'error')
    } else {
      this.props.setPage('login')
      this.props.displayAlert('Registration successful', 2500, 'info')
    }
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

  validateBnetId = (str) => {
    const regex = /^[A-Za-z\u0080-\u00FF]{1}([A-Za-z0-9\u0080-\u00FF]{2,11})#[0-9]{4,5}$/;;
    return regex.test(str) ? true : false
  }
  
  validateConfirmPassword = (str) => {
    return true
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
        <Typography variant='title'>Register</Typography>
        <form>
        <FormControl className='input-group' fullWidth >
          <InputLabel>Email</InputLabel>
          <Input name='email' type='email' onChange={this.handleEmailChange}/>
        </FormControl>
        <FormControl className='input-group' fullWidth >
          <InputLabel>THL Username</InputLabel>
          <Input name='username' onChange={this.handleUsernameChange}/>
        </FormControl>
        <FormControl className='input-group' fullWidth >
          <InputLabel>Battle.net ID</InputLabel>
          <Input name='bnetId' onChange={this.handleBnetIdChange}/>
        </FormControl>
        <FormControl className='input-group' fullWidth>
          <InputLabel>Password</InputLabel>
          <Input name='password' type='password' onChange={this.handlePasswordChange}/>
        </FormControl>
        <FormControl className='input-group' fullWidth>
          <InputLabel> Confirm Password</InputLabel>
          <Input name='passwordConfirm' type='password' onChange={this.handleConfirmPasswordChange}/>
        </FormControl>
        <StyledButton
          onClick={this.handleSubmit}
          disabled={!(this.state.validEmail && 
                      this.state.validPassword && 
                      this.state.validBnetId && 
                      this.state.validPassword && 
                      this.state.validConfirmPassword)}
          text='Register'
        >
          Register
        </StyledButton>
        {this.errorMessage()}
        </form>
        <StyledLink 
            text={'...or log in'}
            onClick={ () => this.props.setPage('login') }
        >

        </StyledLink>
      </div>
    )
  }

}

RegisterPage.propTypes = {
  setPage: PropTypes.func
};