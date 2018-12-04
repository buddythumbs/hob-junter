import React, { Component } from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

// Components
import Header from '../components/Header'

// Styled Components
const Layout = styled.div`
    display: grid;
    grid-template-rows: 5vh 95vh;
    grid-template-columns: 1fr;
    width: 100%;
    height:100%;
    background: url("../../public/assets/jpg/stock-2.jpg") no-repeat center center fixed;
    background-size: cover;
`;

const Head = styled.div`
    max-height: 5vh;
`;

const Content = styled.div`
    color: #eee;;
`;


export default class LayoutPage extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (<Layout>
        <Head>
            <Header />
        </Head>
        <Content>
            {this.props.children}
        </Content>
    </Layout>)
  }
}
