/* eslint-disable import/no-named-as-default */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {AppBar, Button, CssBaseline, IconButton, Toolbar, Typography} from "material-ui";
import MenuIcon from 'material-ui-icons/Menu';
import { withStyles } from 'material-ui/styles';
import {TOGGLE_MENU_OPEN_STATE} from "../constants/actionTypes";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


class Header extends Component {
  render() {
    const { classes, menuOpenState, onMenuToggle,  } = this.props;
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu"
                        onClick={onMenuToggle} >
              {/*<MenuIcon />*/}
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              {`Title`}
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  children: PropTypes.element,
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    menuOpenState : state.menu.open,
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    onMenuToggle : () => ({type: TOGGLE_MENU_OPEN_STATE})
  }, dispatch);
};


export default withStyles(styles)(connect(
  mapStateToProps,
  mapDispatchToProps)(Header));
