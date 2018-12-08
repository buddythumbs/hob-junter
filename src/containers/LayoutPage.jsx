import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
// Components
import Header from '../components/Header/Header'
import { Layout, Head, Content } from '../elements/layouts';
// Actions
import * as routerActions from '../actions/router';



class LayoutPage extends Component {
    static propTypes = {
        goTo: PropTypes.func.isRequired,
        goBack: PropTypes.func.isRequired
    }
  
    render() {
        return <Layout>
            <Header goTo={this.props.goTo} goBack={this.props.goBack}/>
            <Content>
                {this.props.children}
            </Content>
        </Layout>
    }
  }
  

function mapStateToProps(state, props) {
    return {}
}
  
  
  
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...routerActions
    }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LayoutPage));