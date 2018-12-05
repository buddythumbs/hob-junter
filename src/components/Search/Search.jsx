import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Conponents

import KeyWordSearch from './KeyWordSearcher';
import SearchResults from './SearchResults';
import AutoComplete from './AutoComplete';

// Utility/helpers
import { DAW_API } from '../../api/data-at-work-api'
import { memoize } from '../../utils/memoize'

const getBeginsWith = memoize(DAW_API.AUTOCOMPLETE)

// Styled components

const Main = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50%;
  transform: translate(-50%,-50%);
  font-size: 1.3rem;
`;

export default class Search extends Component {
  static propTypes = {
    // searchText: PropTypes.string.isRequired,
    // loadingAutocomplete: PropTypes.bool.isRequired
  }

  handleChangeText = (e) => {
    console.log(e);
    
    this.props.setSearchText(e)
  }

  render() {
    
    const { search: {searchText, searchResults } } = this.props;
    console.log(this.props.search);
    
    // getBeginsWith("\TART","ax")
    // setTimeout(() => {
    //   getBeginsWith("START","ax")
    // }, 3000);

    return <Main>
      <AutoComplete 
        list={searchResults||[]} 
        showList={true}
        value="" 
        handleChange={this.handleChangeText} 
        itemMapper={(item) => ({label:item.suggestion, value: item.parent_uuid})}
      />
      {/* <SearchResults results={searchResults} /> */}
    </Main>
  }
}
