import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import Button from '@material-ui/core/Button'
import fullWidth from '@material-ui/core/TextField'
import TextField from '@material-ui/core/TextField';
const MainArea = styled.div`

`;

export default class JobDetail extends Component {
  static propTypes = {
    // job: PropTypes.object.isRequired
  }

  render() {
    return (
      <h3>
        <Button variant="contained" color="primary" fullWidth>Middle</Button>
        <TextField />
      </h3> 
    )
  }
}
