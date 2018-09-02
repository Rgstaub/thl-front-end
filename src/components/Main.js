import React from 'react';

import { Switch, Route } from 'react-router-dom';
import LoginPage from './LoginPage.js';
import Dashboard from './Dashboard.js';
import TeamPage from './TeamPage.js';
import LeaguePage from './LeaguePage.js';
import StreamsPage from './StreamsPage.js';
import AccountPage from './AccountPage.js';
import RegisterPage from './RegisterPage.js';
import ForgotPasswordPage from './ForgotPasswordPage.js';

const Main = (props) => {

  const rootPage = () => {
    
  }

  return (
    <Switch>
      <Route path='/login/' component={ LoginPage }/>
      <Route path='/register/' component={ RegisterPage }/>
      <Route path='/dashboard/' component={ Dashboard }/>
      <Route path='/team/' component={ TeamPage }/>
      <Route path='/account/' component={ AccountPage }/>
      <Route path='/league/' component={ LeaguePage }/>
      <Route path='/streams/' component={ StreamsPage }/>
      <Route path='/forgot-password/' component={ ForgotPasswordPage }/>

    </Switch>
  )
}

export default Main;