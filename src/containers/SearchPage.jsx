import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Search from '../components/Search/Search';
import * as searchActions from '../actions/search';

function mapStateToProps(state) {
  return {
    search: state.search,
  };
}



function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...searchActions,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);