import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Search from '../components/Search/Search';
import * as searchActions from '../actions/search';
import * as routerActions from '../actions/router';

function mapStateToProps(state) {
  return {
    search: state.search,
  };
}



function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...searchActions,
    ...routerActions
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);