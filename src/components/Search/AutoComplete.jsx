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
      style={{
        fontWeight: props.isSelected ? 500 : 400,
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
      color="textPrimary"
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

const Menu = (props) => {
  return (
    <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
      {props.children}
    </Paper>
  );
}


class Complete extends React.Component {
  static propTypes = {
    list: PropTypes.array, 
    itemMapper: PropTypes.func.isRequired, 
    value: PropTypes.string.isRequired, 
    handleChange: PropTypes.func.isRequired, 
    handleSearch: PropTypes.func.isRequired, 
    error: PropTypes.bool,
    errorMessage: PropTypes.string,
    loading: PropTypes.bool,
  }

  constructor(props){
    super(props)
    this.state = {}
  }

  render() {
    const { 
      error, 
      errorMessage, 
      classes, 
      value, 
      handleChange, 
      handleSearch, 
      list, 
      itemMapper, 
      loading 
    } = this.props;
    
    const selectStyles = {
      input: base => ({
        ...base,
        '& input': {
          font: 'inherit',
        },
      }),
      menuPortal: base => ({ ...base, zIndex: 9999 })
    };
    console.log(this.props);
    
    return <Select
        autoFocus={true}
        value={value}
        openMenuOnFocus={false}
        openMenuOnClick={false}
        placeholder="Search for keywords"
        loadingMessage={() => <text>Looking for matching titles...</text>}
        noOptionsMessage={() => error ? <text>{errorMessage}</text>: <text>type keyword...</text>}
        classes={classes}
        styles={selectStyles}
        captureMenuScroll={true}
        escapeClearsValue={true}
        isLoading={loading}
        menuPortalTarget={document.body}
        options={list ? list.map(itemMapper): []}
        onInputChange={handleChange}
        components={{
            Control,
            Menu,
            NoOptionsMessage,
            Option,
            Placeholder,
            SingleValue,
            ValueContainer,
          }}
        onChange={(obj) => handleSearch(obj) }
        // textFieldProps={{
        //     label: label,
        //     InputLabelProps: {
        //         shrink: true,
        //     },
        // }}
      />
  }
}

Complete.propTypes = {

};

export default withStyles(styles, { withTheme: true })(Complete);