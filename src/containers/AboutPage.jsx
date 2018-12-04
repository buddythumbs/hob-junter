import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import About from '../components/About';

function mapStateToProps(state, props) {
  return {}
}



function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(About);