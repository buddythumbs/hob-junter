import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

// Components
import Chip from '@material-ui/core/Chip';

export default class SearchResult extends Component {
    static propTypes = {
        results: PropTypes.arrayOf(
            PropTypes.shape({
                suggestion: PropTypes.string.isRequired,
                parent_uuid: PropTypes.string.isRequired
            })
        ),
        searchText: PropTypes.string.isRequired,
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
            <h5>{results.length} titles sarting with "{searchText}" </h5>
        </Fragment>
    }
}
