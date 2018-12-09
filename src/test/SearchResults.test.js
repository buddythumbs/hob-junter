import React from 'react';
import ReactDOM from 'react-dom';
import SearchResults from '../components/Search/SearchResults';

const mockProps = {
    results: [],
    searchText: '',
    goTo: () => undefined
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchResults  {...mockProps}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
