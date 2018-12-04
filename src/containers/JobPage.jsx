import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import JobDetail from '../components/JobDetail';
import * as jobActions from '../actions/job';

function mapStateToProps(state, props) {
  return {
    job: state.job,
  };
}



function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...jobActions,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(JobDetail);