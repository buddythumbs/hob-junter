import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

export default class KeyWordSearcher extends Component {
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
  }

  render() {

    const { value, onChange } = this.props;

    return <TextField
      id="outlined-full-width"
      value={value}
      placeholder="'developer' or 'teacher'"
      fullWidth
      onChange={(e) => onChange(e.target.value)}
      margin="dense"
    />
  }
}
