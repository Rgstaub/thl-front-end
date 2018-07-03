//eslint-disable import/first
import React from 'react';
import PropTypes from 'prop-types';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { accountMenu } from '../content/menuItems.json';
// import ('./AccountMenu.css');


function AccountMenu(props) {
  const { menuOpen, closeMenu, loggedIn, handleLogout, handleNavSelection } = props;
  const anchorEl = document.querySelector('.account-icon');

  const menuList = accountMenu.map( (item, i) => {
    return(
      <MenuItem 
        key={item.name.toString()} 
        pageid={item.pageId} 
        onClick={(e) => handleNavSelection(e, item.pageId)}
      >
      {item.name}
      </MenuItem>
    )
  })

  const clickLogout = () => {
    handleLogout();
    closeMenu()
  }
    
  const loginLogout = () => {
    if (loggedIn) {
      return (
        <Menu 
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={closeMenu}
        >
          {menuList}
          <MenuItem onClick={clickLogout} key={'logout'}>Log Out</MenuItem>
        </Menu>
      )
    } else {
      return (
        <Menu 
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={closeMenu}
      >
        <MenuItem key={'login'} onClick={(e) => handleNavSelection(e, 'login')}>Log In</MenuItem>
      </Menu>
        
      )
    }
  }


  return (
    <div>
      {loginLogout()}
    </div>
  )
}

AccountMenu.propTypes = {
  open: PropTypes.bool
};

export default AccountMenu;