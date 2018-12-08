import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
// Components
import { Head } from '../../elements/layouts';
class Header extends Component{
  static propTypes = {
    goTo: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired
  }

  render = () => {
    const { classes, goTo } = this.props;
    return <Head>
      <Button size="large" variant="contained" onClick={() => goTo('/search') } color="primary">Home</Button>
      <Button size="large" variant="contained" onClick={() => goTo('/contact') } color="primary">Contact</Button>
      <Button size="large" variant="contained" onClick={() => goTo('/about') } color="primary">About Us</Button>
    </Head>
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Header;
