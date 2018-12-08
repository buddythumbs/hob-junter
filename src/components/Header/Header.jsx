import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
// Components
import { Head } from '../../elements/layouts';

const Header = ({goTo}) =>
  <Head>
    <Button size="large" variant="contained" onClick={() => goTo('/search') } color="primary">Search (Combined)</Button>
    <Button size="large" variant="contained" onClick={() => goTo('/contact') } color="primary">Search</Button>
    <Button size="large" variant="contained" onClick={() => goTo('/about') } color="primary">Detail</Button>
  </Head>

Header.propTypes = {
  goTo: PropTypes.func.isRequired,
};

export default Header;
