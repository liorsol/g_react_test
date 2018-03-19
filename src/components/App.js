/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, NavLink, Route } from 'react-router-dom';
import HomePage from './HomePage';
import FuelSavingsPage from './containers/FuelSavingsPage';
import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage';
import {AppBar, Button, CssBaseline, IconButton, Input, Toolbar, Typography} from "material-ui";
import MenuIcon from 'material-ui-icons/Menu';
import { withStyles } from 'material-ui/styles';
import Header from "./Header";
import ReposDialog from "./ReposDialog";


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



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: null}
  }

  onGetUser(user) {
    console.log(user);
    fetch("https://api.github.com/users/"+user)
      .then(res => res.json())
      .then(
        (result) => {
          console.log("***", result);
          result.message === "Not Found" ?
            this.setState({
              isLoaded: true,
              items: null
            }) :
            this.setState({
              isLoaded: true,
              items: result
            })
          ;
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            items: null,
            error
          });
        }
      )
  }

  render() {
    const activeStyle = { color: 'blue' };
    const { classes } = this.props;
    const { items } = this.state;
    console.log(items)
    return (
      <div className={classes.root}>
        <Header />
        <Input
          className={classes.input}
          inputProps={{
            'aria-label': 'Description',
          }}
          onChange={(e) => this.onGetUser(e.target.value)}
        />
        {items ?
          <div>
            <img src={items.avatar_url}/>
            <div> name: {items.name} </div>
            <div> company: {items.company} </div>
            <div> email: {items.email} </div>
            <div> followers: {items.followers} </div>
            <div> updated_at: {items.updated_at} </div>
            <ReposDialog reposUrl={items.repos_url} />
          </div> :
          <div> Not Found </div>
        }

        {/*<div>
          <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
          {' | '}
          <NavLink to="/fuel-savings" activeStyle={activeStyle}>Demo App</NavLink>
          {' | '}
          <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/fuel-savings" component={FuelSavingsPage} />
          <Route path="/about" component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>*/}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
