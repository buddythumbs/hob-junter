import React from 'react';
import ReactDOM from 'react-dom';
import Search from '../components/Search/Search';



it('renders without crashing', () => {

  const mockProps = {
    search : {
      searchText: "",
      searchResults: [],
      loadingAutocomplete: false,
      fetchedJob: false
    },
    searchId: () => undefined,
    searchText: () => undefined,
    setSearchText: () => undefined
  }

  const div = document.createElement('div');
  ReactDOM.render(<Search {...mockProps}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});