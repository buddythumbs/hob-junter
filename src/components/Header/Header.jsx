import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
// Components
import { Head } from '../../elements/layouts';

const Header = ({goTo}) =>
  <Head>
  </Head>

Header.propTypes = {
  goTo: PropTypes.func.isRequired,
};

export default Header;
