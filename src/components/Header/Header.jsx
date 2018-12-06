import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Link,withRouter} from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// Styled components
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const styles = {
  root: {
    flexGrow: 1,
    maxHeight: '5vh',
    justifyContent: 'center'
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class ButtonAppBar extends Component{
  static propTypes = {
    classes: PropTypes.shape({
      root: PropTypes.object.isRequired,
      grow: PropTypes.object.isRequired,
      menuButton: PropTypes.object.isRequired
    }).isRequired,
    goTo: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired
  }

  render = () => {
    const { classes, goTo } = this.props;
    return (
      <div className={classes.root}>
        <AppBar className={classes.root} position="static">
          <Toolbar>
              <Typography onClick={() => goTo('/') }  variant="h6" color="inherit" className={classes.grow}>
                  Hob Junter
              </Typography>
              <Button onClick={() => goTo('/search') } color="inherit">Home</Button>
              <Button onClick={() => goTo('/contact') } color="inherit">Contact</Button>
              <Button onClick={() => goTo('/about') } color="inherit">About Us</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
