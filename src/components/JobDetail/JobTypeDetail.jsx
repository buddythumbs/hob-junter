import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

// Components
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import { DetailRow, DetailColumn } from '../../elements/layouts';


class JobTypeDetail extends Component {
    
    static propTypes = {
      searchJob: PropTypes.func.isRequired,
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
        const { fetchedJobDetail, searchJob } = this.props;
        const bull = <span>•</span>;
        return (
          <Card >
            <CardContent>
              <DetailColumn>
                <Typography style={{padding: 10}} variant="p" component="h2">
                  {fetchedJobDetail.title}
                </Typography>
                <Typography style={{padding: 10}} component="p">
                  {fetchedJobDetail.description}
                </Typography>
              </DetailColumn>
              <DetailColumn style={{padding: 10}} >
                <Typography variant="h6" component="h2">
                  Related Titles
                </Typography>
                  <DetailRow>
                    {_.map(
                      _.take(
                        fetchedJobDetail.related_job_titles,
                        5
                        ),
                      title => <Chip color="primary" key={title.uuid} label={title.title} style={{margin: 8}} variant="outlined" />
                    )}
                  </DetailRow>
                <Typography variant="h6" component="h2">
                  Related Skills
                </Typography>
                  <DetailRow>
                    {_.map(
                      _.take(
                        fetchedJobDetail.skills,
                        10
                        ),
                      skill => <Chip color="secondary" key={skill.skill_uuid} label={skill.skill_name} style={{margin: 8}} variant="outlined" />
                    )}
                  </DetailRow>
              </DetailColumn>
            </CardContent>
          </Card>
        );
      }
}

export default JobTypeDetail;