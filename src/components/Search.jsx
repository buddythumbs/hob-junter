import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Search extends Component {
  static propTypes = {
    searchText: PropTypes.string.isRequired,
    loadingAutocomplete: PropTypes.bool.isRequired
  }

  render() {
    return (
      <div>
        This is the search page
      </div>
    )
  }
}
