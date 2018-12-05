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
      label="Search Key Word in Job Title"
      value={value}
      style={{ margin: 8 }}
      placeholder="Placeholder"
      helperText="Full width!"
      fullWidth
      onChange={onChange}
      margin="normal"
      variant="outlined"
      InputLabelProps={{
        shrink: true,
      }}
    />
  }
}
