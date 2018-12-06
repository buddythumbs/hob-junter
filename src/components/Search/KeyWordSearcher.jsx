import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

export default class KeyWoordSearcher extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  }

  render() {

    const { value, onChange } = this.props;

    return <TextField
      id="outlined-full-width"
      label="What do you want to be?"
      value={value}
      style={{ margin: 8 }}
      placeholder="Placeholder"
      helperText="keywords"
      fullWidth
      onChange={onChange}
      margin="dense"
      InputLabelProps={{
        shrink: true,
      }}
    />
  }
}
