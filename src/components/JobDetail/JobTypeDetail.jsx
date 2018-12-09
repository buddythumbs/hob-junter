import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

// Components
import Chip from '@material-ui/core/Chip';
import { DetailRow} from '../../elements/layouts';
import Button from '@material-ui/core/Button';
import Back from '@material-ui/icons/ArrowBack';
import Skill from './Skill';


class JobTypeDetail extends Component {
    
    static propTypes = {
      goBack: PropTypes.func.isRequired,
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

    render = () => {
        const { fetchedJobDetail } = this.props;
        return <Fragment>
            <h3>
              {fetchedJobDetail.title}
            </h3>
            <p style={{padding: 10}}>
              {fetchedJobDetail.description}
            </p>
            <Button color="primary" onClick={this.props.goBack}><Back fontSize="small"/>Back to search</Button>
          <h3>
            Related Titles
          </h3>
            <DetailRow>
              {_.map(
                _.take(
                  fetchedJobDetail.related_job_titles,
                  5
                  ),
                title => <Chip style={{fontSize: '1.2em', margin: 8}} color="primary" variant="outlined" key={title.uuid} label={title.title}/>
              )}
            </DetailRow>
          <h3>
            Related Skills
          </h3>
            <DetailRow>
              {_.map(
                _.take(
                  fetchedJobDetail.skills.sort((a,b) => a.importance > b.importance ? -1 : a.importance > b.importance ? 1 : 0),
                  10
                  ),
                skill => <Skill key={skill.skill_uuid} style={{margin: 15}} {...skill}/>
              )}
            </DetailRow>
        </Fragment>
      }
}

export default JobTypeDetail;