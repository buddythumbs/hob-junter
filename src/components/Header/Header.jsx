import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
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

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar className={classes.root} position="static">
        <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
                Hob Junter
            </Typography>
            <StyledLink  to="/search">
              <Button color="inherit">Search</Button>
            </StyledLink>
            <StyledLink  to="/contact" >
              <Button color="inherit">Contact</Button>
            </StyledLink>
            <StyledLink  to="/about" >
              <Button color="inherit">About Us</Button>
            </StyledLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
