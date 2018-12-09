import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

// Components
import JobTypeDetail from './JobTypeDetail'
import { LinearProgress } from '@material-ui/core';

const MainArea = styled.div`
  width: 80%;
  margin:auto;
`;

export default class JobDetail extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        jobId: PropTypes.string.isRequired
      })
    }),
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
    }),
    fetchedJob: PropTypes.bool
  }

  componentDidMount = () => {
    const { match: { params: { jobId } } } = this.props;
    this.props.searchId(jobId)
  }
  

  render() {
    const { search: { fetchingJob, fetchedJobDetail, fetchedJob} } = this.props;
    if(fetchingJob) return <LinearProgress />
    return (
      <MainArea>
        
        {fetchedJob && fetchedJobDetail && <JobTypeDetail goBack={this.props.goBack} fetchedJobDetail={fetchedJobDetail} />}
      </MainArea> 
    )
  }
}
