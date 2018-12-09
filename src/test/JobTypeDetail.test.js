import React from 'react';
import ReactDOM from 'react-dom';
import JobTypeDetail from '../components/JobDetail/JobTypeDetail';

const mockProps = {
    goBack: () => undefined,
    fetchedJobDetail: {
        description: '',
        onet_soc_code: '',
        related_job_titles: [
            {
            uuid: '3',
            title: ''
            }
        ],
        skills: [
            {
                skill_uuid: '4',
                skill_name: '',
                skill_type: '',
                description: '',
                normalized_skill_name: '',
                importance: 0,
                level: 0
            }
        ],
        title: '',
        unusual_job_titles: [
            {
                uuid: '5',
                title: ''
            }
        ],
        uuid: '5'
    }
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<JobTypeDetail {...mockProps}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});