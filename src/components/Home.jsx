import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

// Styled components

const StyledPaper = styled(Paper)`
  width: 80%;
  margin: auto;
  margin-top: 30px;
  padding: 20px;
`;

export default class Home extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return <StyledPaper>
      <div>
        Home
      </div>
    </StyledPaper>
  }
}
