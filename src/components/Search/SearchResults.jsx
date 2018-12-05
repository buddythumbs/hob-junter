import React from 'react';
import _ from 'lodash';
import hash from 'object-hash';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Search from '@material-ui/icons/Search';

const SearchResult = ({job}) => <ListItem >
    <ListItemText primary={job.suggestion}/>
    <ListItemIcon>
        <Search />
    </ListItemIcon>
</ListItem>

export default ({results}) => {
  return <List>
    {
        _.map(
            results,
            result => <SearchResult key={hash(result)} job={result} />
        )
    }
    </List>
}
