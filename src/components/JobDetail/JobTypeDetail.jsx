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
              <Typography variant="h5" component="h2">
                {fetchedJobDetail.title}
              </Typography>
              <Typography component="p">
                {fetchedJobDetail.description}
              </Typography>
              <CardActions>
                <Button variant="contained" color="primary">Show me these jobs!</Button>
              </CardActions>
              <Typography variant="h5" component="h2">
                Related Titles
              </Typography>
              {_.map(
                fetchedJobDetail.related_job_titles,
                title => <Chip color="primary" key={title.uuid} label={title.title} style={{marginLeft: 8}} onClick={() => searchJob(title.uuid) } variant="outlined" />
              )}
            </CardContent>
          </Card>
        );
      }
}

export default JobTypeDetail;