import React from 'react';
import ReactDOM from 'react-dom';
import KeyWordSearcher from './KeyWordSearcher';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<KeyWordSearcher />, div);
  ReactDOM.unmountComponentAtNode(div);
});