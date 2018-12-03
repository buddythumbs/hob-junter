import React from 'react';
import ReactDOM from 'react-dom';
import JobDetail from './JobDetail';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<JobDetail />, div);
  ReactDOM.unmountComponentAtNode(div);
});
