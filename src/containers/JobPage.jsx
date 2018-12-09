import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import JobDetail from '../components/JobDetail/JobDetail';
import { searchId } from '../actions/search';
import { goBack } from '../actions/router';

function mapStateToProps(state, props) {
  return {
    search: state.search,
  };
}



function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    goBack,
    searchId
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(JobDetail);