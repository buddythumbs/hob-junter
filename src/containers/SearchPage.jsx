import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Search from '../components/Search';
import * as jobActions from '../actions/job';

function mapStateToProps(state) {
  return {
    job: state.job,
  };
}



function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...jobActions,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);