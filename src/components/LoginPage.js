//eslint-disable import/first
import React from 'react';
// import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import StyledButton from './StyledButton';
import StyledLink from './StyledLink';
import Typography from '@material-ui/core/Typography';
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

    this.postData = function(url, data) {
      // Default options are marked with *
      return fetch(url, {
        body: JSON.stringify(data), // must match 'Content-Type' header
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, same-origin, *omit
        headers: {
          'user-agent': 'Mozilla/4.0 MDN Example',
          'content-type': 'application/json'
        },
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // *client, no-referrer
      })
      .then(response => {
        if (response.status === 401) {
          return {error: "Invalid email or password"}
        } else return response.json();
      })
    }
  }


  handleEmailChange = (e) => {
    this.setState({email: e.target.value})
    if (this.validateEmail(e.target.value)) {
      this.setState({validEmail: true})
    } else {
      this.setState({validEmail: false})
    }
  }

  handlePasswordChange = (e) => {
    this.setState({password: e.target.value})
    this.validatePassword(e.target.value)
      ? this.setState({validPassword: true})
      : this.setState({validPassword: false})
  }

  handleSubmit = () => {
    this.postData('login', {email: this.state.email, password: this.state.password})
    .then( response => {
      this.handleResponse(response);
    })
    // .catch( err => console.log(err))
  }

  handleResponse = (response) => {
    if (response.error) {
      this.props.displayAlert(response.error, 2500, 'error')
    } else {
      this.setState({failedLogin: false})
      this.props.handleLogin(response);
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
        <Typography variant='title'>Login</Typography>
        <form>
        <FormControl className='input-group' fullWidth >
          <InputLabel>Email</InputLabel>
          <Input name='email' onChange={this.handleEmailChange}/>
        </FormControl>
        <FormControl className='input-group' fullWidth>
          <InputLabel>Password</InputLabel>
          <Input name='password' onChange={this.handlePasswordChange}/>
        </FormControl>
        <StyledButton
          className='login-button'
          onClick={this.handleSubmit}
          disabled={!(this.state.validEmail && this.state.validPassword)}
          text={'Login'}
        >
          Login
        </StyledButton>
        <StyledLink 
          text='...or register'
          onClick={ () => this.props.setPage('register')}
        />
        {this.errorMessage()}
        </form>
      </div>
    )
  }
}
