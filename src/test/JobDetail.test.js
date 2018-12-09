import React from 'react';
import ReactDOM from 'react-dom';
import JobDetail from '../components/JobDetail/JobDetail';

const mockProps = {
  search: {
    fetchingJob: false,
    fetchedJobDetail: {
      description: '',
      onet_soc_code: '',
      title: '',
      uuid: ''
    },
    fetchedJob: false
  },
  match: {
    params: {
      jobId: '1'
    }
  },
  searchId: () => undefined 
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<JobDetail {...mockProps}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
