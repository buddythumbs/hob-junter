import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Conponents
import KeyWordSearch from './KeyWordSearcher';
import SearchResults from './SearchResults';
import AutoComplete from './AutoComplete';
import JobDetail from '../JobDetail/JobTypeDetail';
import { Main } from '../../elements/layouts';

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
      loadingAutocomplete: PropTypes.bool.isRequired
    }).isRequired,
    setSearchText: PropTypes.func.isRequired,
    searchId: PropTypes.func.isRequired,
    fetchedJob: PropTypes.bool.isRequired,
    fetchedJobDetail: PropTypes.shape({
      description: PropTypes.string.isRequired,
      onet_soc_code: PropTypes.string.isRequired,
      related_job_titles: PropTypes.arrayOf(
        PropTypes.shape({
          uuid: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired
        })
      ),
      title: PropTypes.string.isRequired,
      unusual_job_titles: PropTypes.arrayOf(
        PropTypes.shape({
          uuid: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired
        })
      ),
      uuid: PropTypes.string.isRequired
    })

  }

  handleChangeText = (e) => {
    
    this.props.setSearchText(e)
  }

  handleClickOnTitle = (id) => {
    
    this.props.searchId(id)
    this.props.setSearchText(id)
  }

  render() {
    
    const { search: {searchText, searchResults, fetchedJob, fetchedJobDetail } } = this.props;

    return <Main>
      <h4>What do you want to be?</h4>
      <AutoComplete 
        list={searchResults||[]} 
        label={""}
        showList={true}
        value={searchText||""} 
        handleChange={this.handleChangeText} 
        itemMapper={(item) => ({label:item.suggestion, value: item.parent_uuid})}
        handleSearch={this.handleClickOnTitle}
      />
      {/* <KeyWordSearch /> */}
      {fetchedJob && fetchedJobDetail && <JobDetail searchJob={console.log} fetchedJobDetail={fetchedJobDetail} />}
    </Main>
  }
}
