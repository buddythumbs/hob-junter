import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Conponents
import KeyWordSearch from './KeyWordSearcher';
import SearchResults from './SearchResults';
import AutoComplete from './AutoComplete';
import JobDetail from '../JobDetail/JobTypeDetail';
import { Main } from '../../elements/layouts';
import { LinearProgress } from '@material-ui/core';

export default class Search extends Component {
  static propTypes = {
    search: PropTypes.shape({
      searchText: PropTypes.string.isRequired,
      searchResults: PropTypes.arrayOf(
        PropTypes.shape({
          suggestion: PropTypes.string.isRequired,
          parent_uuid: PropTypes.string.isRequired
        })
      ),
      loadingAutocomplete: PropTypes.bool.isRequired,
      fetchedJob: PropTypes.bool.isRequired,
      error: PropTypes.bool,
      errorMessage: PropTypes.string,
    }).isRequired,
    setSearchText: PropTypes.func.isRequired,
    searchId: PropTypes.func.isRequired
  }

  handleChangeText = (e,type) => {
    this.props.setSearchText(e);
  }

  render() {
    
    const { search: { error, errorMessage, searchText, searchResults, loadingAutocomplete } } = this.props;

    return <Main>
      <h4>What do you want to be?</h4>
      <KeyWordSearch value={searchText} onChange={this.handleChangeText} />
      {error && <h5>{errorMessage}</h5>}
      {loadingAutocomplete && <LinearProgress />}
      {searchResults && searchResults.length && 
        <SearchResults 
          searchText={searchText}
          results={searchResults} 
          loading={loadingAutocomplete} 
          goTo={this.props.goTo}
        />
      }
    </Main>
  }
}
