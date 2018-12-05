import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../components/Home/Home';
import * as contactActions from '../actions/contact';

function mapStateToProps(state, props) {
  return {}
}



function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...contactActions,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);