import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class JobDetail extends Component {
  static propTypes = {
    job: PropTypes.object.isRequired
  }

  render() {
    return (
      <div>
        This is the detail page
      </div>
    )
  }
}
