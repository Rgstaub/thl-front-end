
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuDrawer from './MenuDrawer';
import AccountIcon from './AccountIcon';
import ('./AppBar.css');
//import LeagueSelect from './LeagueSelect';


export default class TopBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      drawerOpen: false,
      menuOpen: false
    }
  }


  


  closeDrawer = () => {
    this.setState({drawerOpen: false});
  }
  openDrawer = () => {
    this.setState({drawerOpen: true});
  }
  openMenu = () => {
    this.setState({menuOpen: true})
  }
  closeMenu = () => {
    this.setState({menuOpen: false})
  }

  render() {

    return (
      <div >
        <AppBar position="static" color="default">
          <Toolbar>
          <MenuDrawer
            drawerState={this.state.drawerOpen}
            closeDrawer={this.closeDrawer}
            openDrawer={this.openDrawer}
            handleNavSelection={this.props.handleNavSelection}
            {...this.props}
          />
            <IconButton aria-label="Menu">
              <MenuIcon 
                onClick={this.openDrawer}
              />
            </IconButton>
            <div className='league-select'>Select League</div>
            <AccountIcon 
              src={this.props.avatarSrc}
              menuOpen={this.state.menuOpen}
              closeMenu={this.closeMenu}
              openMenu={this.openMenu}
              loggedIn={this.props.loggedIn}
              handleLogout={this.props.handleLogout}
              handleNavSelection={this.props.handleNavSelection}
            />
          </Toolbar>

        </AppBar>
      </div>
    );
  }
}
