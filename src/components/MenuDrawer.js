import React from 'react';
import PropTypes from 'prop-types';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { navDrawer } from '../content/menuItems.json';



const NavDrawer = (props) => {

  const {drawerState, closeDrawer, openDrawer, handleNavSelection } = props;

    const menuList = navDrawer.map( item => {

      return (
        <ListItem key={item.name.toString()}>
          <Button
            onClick={(e) => handleNavSelection(e, item.pageId)}
          >{item.name}</Button>
        </ListItem>
      )
    })


    return (
      <div>
        <SwipeableDrawer
          open={drawerState}
          onClose={closeDrawer}
          onOpen={openDrawer}
          anchor='left'
        >
          <div
            tabIndex={0}
            role="button"
            onClick={closeDrawer}
            onKeyDown={closeDrawer}
          >
            <List>{menuList}</List>
          </div>
        </SwipeableDrawer>
      </div>
    );
}

NavDrawer.propTypes = {
  drawerState: PropTypes.bool,
  closeDrawer: PropTypes.func,
  openDrawer: PropTypes.func,
};

export default NavDrawer;