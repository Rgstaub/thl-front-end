import React, { Component } from 'react';
import AlertBar from './components/AlertBar.js';
import AppBar from './components/AppBar.js';
import LoginPage from './components/LoginPage.js';
import Dashboard from './components/Dashboard.js';
import TeamPage from './components/TeamPage.js';
import LeaguePage from './components/LeaguePage.js';
import StreamsPage from './components/StreamsPage.js';
import AccountPage from './components/AccountPage.js';
import RegisterPage from './components/RegisterPage.js';
import Get from './utilities/Get';
import Post from './utilities/Post';
import CssBaseline from '@material-ui/core/CssBaseline';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {

      },
      avatarSrc: './images/userAvatars/avatar.png',
      currentLeague: {
        name: 'Sylvanas League',
        id: 'sylvanas'
      },
      allLeagues: [
        {
          "name": 'Sylvanas League',
          "id": 'sylvanas'
        },
        {
          "name": 'Ragnaros League',
          "id": 'ragnaros'
        },
        {
          "name": 'Mysterious Challenger League',
          "id": 'mysteriousChallenger'
        }
      ],
      currentPage: "login",
      loggedIn: false,
      alert: {
        isOpen: false,
        message: 'test alert message',
        variant: 'info'
      }
    }
    //this.handleLeagueSelection = this.handleLeagueSelection.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleNavSelection = this.handleNavSelection.bind(this);
    this.setPage = this.setPage.bind(this);
    this.displayAlert = this.displayAlert.bind(this);
  }

  componentDidMount() {
    Get('api/auth/welcome').then( response => {
      console.log(response);
      if (response.status === 200) {
        this.setState({
          loggedIn: true, 
          currentPage: 'dashboard',
          user: {...response}
        })
      } else {
        this.setState({currentPage: 'register'})
      }
    })
  }
  

  // handleLeagueSelection(){
  //   console.log("######################");
  //   this.setState({currentLeague: {
  //     name: 'Luke',
  //     id: 'luke'
  //   }})
  // }

  handleLogin(response) {
    this.setState({
      loggedIn: true, 
      currentPage: 'dashboard',
      user: {...response}
    })
  }

  handleNavSelection(e, selected) {
    e.preventDefault();
    this.setState({currentPage: selected})
  }

  setPage(pageId) {
    this.setState({currentPage: pageId})
  }

  handleLogout() {
    this.setState({loggedIn: false})
    Post('logout').then(response => {
      console.log(response)
      this.setState({
        currentPage: 'login',
        user: {}
      })
    })
  }

  displayAlert(message, duration, variant) {
    this.setState({
      alert: {
        isOpen: true,
        message: message,
        variant: variant
      }
    })
    setTimeout( () => {
      this.setState({
        alert: {
          isOpen: false,
          message: 'test alert message',
          variant: 'info'
        }
      })
    }, duration)

  }

  currentPage() {
    if (this.state.loggedIn === false && this.state.currentPage ==='login') {
      return (
        <LoginPage 
          handleLogin={this.handleLogin}
          displayAlert={this.displayAlert} 
          setPage={this.setPage} 
        />
      )
    } else if (this.state.loggedIn === false) {
      return (
        <RegisterPage 
          handleLogin={this.handleLogin} 
          displayAlert={this.displayAlert}
          setPage={this.setPage}/>
      )
    } else if (this.state.currentPage === 'dashboard') {
      return (
        <Dashboard {...this.state.user} />
      )
    } else if (this.state.currentPage === 'team') {
      return (
        <TeamPage {...this.state.user} />
      )
    } else if (this.state.currentPage === 'league') {
      return (
        <LeaguePage {...this.state.user} />
      )
    }
    else if (this.state.currentPage === 'streams') {
      return (
        <StreamsPage {...this.state.user} />
      )
    } else if (this.state.currentPage === 'account') {
      return (
        <AccountPage {...this.state.user} />
      )
    }
    else if (this.state.currentPage === 'register') {
      return (
        <RegisterPage {...this.state.user} />
      )
    }  else if (this.state.currentPage === 'register') {
      return (
        <RegisterPage {...this.state.user}
          setPage={this.setPage} 
        />
      )
    }
  }

  render() {
    return (
      <div className="App">
        <CssBaseline />
        <AlertBar   
          text={this.state.alert.message}
          isOpen={this.state.alert.isOpen}
          variant={this.state.alert.variant}
        />
        <AppBar
          handleLeagueSelection={this.handleLeagueSelection}
          handleLogout={this.handleLogout}
          handleNavSelection={this.handleNavSelection}
          {...this.state}
        />

        {this.currentPage()}

      </div>
    );
  }
}

export default App;
