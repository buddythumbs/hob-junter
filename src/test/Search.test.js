import React from 'react';
import ReactDOM from 'react-dom';
import Search from '../components/Search/Search';



it('renders without crashing', () => {

  const search = {
    searchText: "",
    searchResults: []
  }

  const div = document.createElement('div');
  ReactDOM.render(<Search search={search}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});