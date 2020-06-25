import React from 'react';
import PropTypes from 'prop-types';
import {
  Layout as AntLayout,
} from 'antd';
import { cyan, purple } from '@ant-design/colors';
import Navigation from '../Navigation/Navigation';
import createGradient from '../../utils/createGradient';
import ShoppingCart from '../ShoppingCart';

const {
  Header, Footer, Content,
} = AntLayout;

const Layout = (props) => {
  const { children } = props;

  return (
    <AntLayout>
      <AntLayout>
        <AntLayout>
          <Header
            style={{ background: createGradient(cyan[4], purple[3], 135) }}
          >
            <Navigation />
          </Header>
          <Content style={{ padding: '0 calc(2rem + 80px) 0 2rem' }}>
            {children}
          </Content>
        </AntLayout>
        <ShoppingCart />
      </AntLayout>
      <Footer />
    </AntLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
