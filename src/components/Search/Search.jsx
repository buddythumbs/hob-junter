import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

// Utility/helpers
import { DAW_API } from '../../api/data-at-work-api'
import { memoize } from '../../utils/memoize'

const getBeginsWith = memoize(DAW_API.AUTOCOMPLETE)

// Styled components


const Main = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`;

export default class Search extends Component {
  static propTypes = {
    // searchText: PropTypes.string.isRequired,
    // loadingAutocomplete: PropTypes.bool.isRequired
  }

  componentDidMount = () => {
    // getBeginsWith("START","ax")
  }
  
  componentDidUpdate = (prevProps, prevState) => {
    // getBeginsWith("START","ax")
    
  }
  

  render() {
    console.log(this.props);
    
    // getBeginsWith("START","ax")
    // setTimeout(() => {
    //   getBeginsWith("START","ax")
    // }, 3000);

    return <Main>
      
    </Main>
  }
}
