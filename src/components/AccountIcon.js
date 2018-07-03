//eslint-disable import/first
import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import AccountMenu from './AccountMenu';
import ('./AccountIcon.css');

function AccountIcon(props) {
  const { menuOpen, src, closeMenu, openMenu, loggedIn, handleLogout, handleNavSelection } = props;

  const setAvatar = () => {
    if (loggedIn) {
      return src;
    } else {
      return './images/userAvatars/image.png'
    }
  }

  return (
    <div >
      <Avatar
        src={setAvatar()}
        alt="User avatar thumbnail"
        className="account-icon"
        onClick={openMenu}
      />
      <AccountMenu 
        menuOpen={menuOpen}
        closeMenu={closeMenu}
        openMenu={openMenu}
        loggedIn={loggedIn}
        handleLogout={handleLogout}
        handleNavSelection={handleNavSelection}
      />
    </div>
  )
}

AccountIcon.propTypes = {
  src: PropTypes.string,
  menuOpen: PropTypes.bool
};


export default AccountIcon;