import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import hash from 'object-hash';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Search from '@material-ui/icons/Search';

export default class SearchResult extends Component {
    static propTypes = {
        results: PropTypes.arrayOf(
            PropTypes.shape({
                
            })
        )
    }
    render = () => {
        const { results } = this.props;

        return <div>{results.length} resulsts returned</div>
    }
}
