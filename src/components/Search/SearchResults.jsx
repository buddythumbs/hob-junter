import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import Open from '@material-ui/icons/OpenInNew';

export default class SearchResult extends Component {
    static propTypes = {
        results: PropTypes.arrayOf(
            PropTypes.shape({
                suggestion: PropTypes.string.isRequired,
                parent_uuid: PropTypes.string.isRequired
            })
        ),
        searchText: PropTypes.string.isRequired,
        loadingAutocomplete: PropTypes.bool.isRequired,
        error: PropTypes.bool,
        errorMessage: PropTypes.string,
        goTo: PropTypes.func.isRequired,
    }

    render = () => {
        const { results, searchText, goTo } = this.props;

        return <Fragment>
            <div>
                {_.map(
                    results,
                    (result,i) => <Chip
                    key={i}
                    style={{margin: 3}}
                    label={result.suggestion}
                    onClick={() => goTo(`jobs/${result.parent_uuid}`)} 
                    variant="outlined"
                    color='secondary'
                    />
                    )}
            </div>
            <div>{results.length} titles sarting with "{searchText}" </div>
        </Fragment>
    }
}
