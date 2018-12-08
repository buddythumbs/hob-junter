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
      loadingAutocomplete: PropTypes.bool.isRequired,
      fetchedJob: PropTypes.bool.isRequired,
      error: PropTypes.bool,
      errorMessage: PropTypes.string,
    }).isRequired,
    setSearchText: PropTypes.func.isRequired,
    searchId: PropTypes.func.isRequired,
    fetchedJobDetail: PropTypes.shape({
      description: PropTypes.string.isRequired,
      onet_soc_code: PropTypes.string.isRequired,
      related_job_titles: PropTypes.arrayOf(
        PropTypes.shape({
          uuid: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired
        })
      ),
      skills: PropTypes.arrayOf(
        PropTypes.shape({
          skill_uuid: PropTypes.string.isRequired,
          skill_name: PropTypes.string.isRequired,
          skill_type: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
          normalized_skill_name: PropTypes.string.isRequired,
          importance: PropTypes.number.isRequired,
          level: PropTypes.number.isRequired
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

  handleChangeText = (e,type) => {
    // console.log("hanlde change fired",type);
    if(type.action === "input-change") {
      this.props.setSearchText(e);
    }
  }
  
  handleClickOnTitle = (obj,meta) => {
    this.props.searchId(obj.value)
    this.props.setJobTitle(obj.value)
  }

  render() {
    
    const { search: { error, errorMessage, searchText, searchResults, fetchedJob, fetchedJobDetail, loadingAutocomplete } } = this.props;

    return <Main>
      <h4>What do you want to be?</h4>
      <AutoComplete 
        list={searchResults} 
        showList={true}
        loading={loadingAutocomplete}
        value={searchText} 
        error={error}
        errorMessage={errorMessage}
        handleChange={this.handleChangeText}
        itemMapper={(item) => ({label:item.suggestion, value: item.parent_uuid})}
        handleSearch={this.handleClickOnTitle}
      />
      {/* <KeyWordSearch /> */}
      {fetchedJob && fetchedJobDetail && <JobDetail searchJob={this.handleClickOnTitle} fetchedJobDetail={fetchedJobDetail} />}
    </Main>
  }
}
