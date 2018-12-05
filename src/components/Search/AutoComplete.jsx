import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classNames from 'classnames'
import Select from 'react-select';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import CancelIcon from '@material-ui/icons/Cancel';
import {
    AllSubstringsIndexStrategy,
    Search,
    UnorderedSearchIndex,
  } from 'js-search';
import {MUI_PALETTE} from '../../utils/theme';


const styles = theme => ({
  input: {
    display: 'flex',
    padding: 0,
    cursor: 'default'
  },
  chip: {
    margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
  },
  noOptionsMessage: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  placeholder: {
    position: 'absolute',
    left: 2,
  },
  paper: {
    position: 'absolute',
    zIndex: 20000,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
  },
});

const NoOptionsMessage = (props) => {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

const inputComponent = ({ inputRef, ...props }) => {
  return <div ref={inputRef} {...props} />;
}

const Control = (props) => {
  return (
    <TextField
        fullWidth
        InputProps={{
            inputComponent,
            inputProps: {
              className: props.selectProps.classes.input,
              inputRef: props.innerRef,
              children: props.children,
              ...props.innerProps,
            },
        }}
        {...props.selectProps.textFieldProps}
    />
  );
}

const Option = (props) => { 
  return (
    <MenuItem
      buttonRef={props.innerRef}
      selected={props.isFocused}
      component="div"
      dense
      style={{
        fontWeight: props.isSelected ? 500 : 400,
        padding: '0 5px'
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}

const Placeholder = (props) => {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.placeholder}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

const SingleValue = (props) => {
  return (
    <Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
      {props.children}
    </Typography>
  );
}

const ValueContainer = (props) => {
  return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
}

const MultiValue = (props) => {
  return (
    <Chip
      tabIndex={-1}
      label={props.children}
      className={classNames(props.selectProps.classes.chip, {
        [props.selectProps.classes.chipFocused]: props.isFocused,
      })}
      onDelete={props.removeProps.onClick}
      deleteIcon={<CancelIcon {...props.removeProps} />}
    />
  );
}

const Menu = (props) => {
  return (
    <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
      {props.children}
    </Paper>
  );
}


class Complete extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  
  componentDidMount = () => {
    const { list, itemMapper, value, handleChange, label } = this.props
    
    const _LIST = list.map(itemMapper)
    
    let _VALUE = _.find(_LIST, item => item.value === value)
    
    this.setState({
      search: this.setSearch(_LIST),
      options: _LIST,
      value: _VALUE,
      handleChange,
      label,
    })
  }
  
  static getDerivedStateFromProps = (props, state) => {
    
    const { value, options } = state

    let newState = {}

    // Update value
    if(props.value !== value) {
        const _VALUE = _.find(options, item => item.value === props.value)
        newState.value = _VALUE 
    }

    // Update list
    if(!options || props.list.length !== options.length){
      newState.options = props.list.map(props.itemMapper)
    }

    return newState
    
  }

  setSearch = (options) => {
    // Prepare a searcher
    const search = new Search('label')
    search.searchIndex = new UnorderedSearchIndex()
    search.indexStrategy = new AllSubstringsIndexStrategy()
    search.addIndex('value')
    search.addIndex('label')
    search.addDocuments(options)
    return search
  }

  handleInputChange = (inputValue) => {
    const { search, options } = this.state

    let test = 0
    if(options.length >= 1000) test = 2
    
    if(inputValue && inputValue.length > test){
      let results = search.search(inputValue)
      // console.log(results)
      this.searchResults = results
      return
    }
    this.searchResults = null
  }

  filter = (props) => {
    const { showList } = this.props
    // Looking up in the precomputed results
    // console.log(props)
    return this.searchResults ? this.searchResults.indexOf(props.data) > -1  : showList
  }

  render() {
    const { options } = this.state;
    const { classes, value, handleChange, label } = this.props;
    
    const selectStyles = {
      input: base => ({
        ...base,
        color: MUI_PALETTE.primary,
        '& input': {
          font: 'inherit',
        },
      }),
      menuPortal: base => ({ ...base, zIndex: 9999 })
    };

    return (
      <Select
        openMenuOnFocus={options.length >= 100 ? false : true}
        openMenuOnClick={options.length >= 100 ? false : true}
        placeholder="Search for keywords"
        classes={classes}
        styles={selectStyles}
        menuPortalTarget={document.body}
        options={options}
        onInputChange={handleChange}
        filterOption={this.filter}
        components={{
            Control,
            Menu,
            MultiValue,
            NoOptionsMessage,
            Option,
            Placeholder,
            SingleValue,
            ValueContainer,
          }}
        value={value}
        onChange={(obj) => handleChange(obj.value) }
        textFieldProps={{
            margin: 'dense',
            label: label,
            InputLabelProps: {
                shrink: true,
            },
        }}
      />
    );
  }
}

Complete.propTypes = {

};

export default withStyles(styles, { withTheme: true })(Complete);