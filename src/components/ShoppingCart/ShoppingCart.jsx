import React, { useState, useContext, useEffect } from 'react';
import {
  Layout, message,
} from 'antd';
import {
  FrownOutlined,
} from '@ant-design/icons';
import useMediaQuery, { breakpoints } from '../../utils/hooks/useMediaQuery';
import { CartContext } from '../../cart/store/cart';
import { types } from '../../cart/reducer/cartReducer';
import OpenCart from './components/OpenCart';
import Items from './components/Items';
import Checkout from './components/Checkout';

const noitems = () => {
  message.info({
    content: 'No items in cart yet!',
    icon: <FrownOutlined />,
  });
};
const { Sider } = Layout;

const ShoppingCart = () => {
  const matches = useMediaQuery(breakpoints.lg);
  const { state, dispatch } = useContext(CartContext);

  const [collapsed, toggleCollapsed] = useState(true);
  useEffect(() => {
    if (!state.length) {
      toggleCollapsed(true);
    }
  }, [state]);

  return (
    <Sider
      style={{
        position: 'fixed',
        height: '100vh',
        right: 0,
      }}
      collapsed={collapsed}
      collapsedWidth={matches ? 80 : 60}
      width={matches ? 1920 / 3 : window.innerWidth}
    >
      <Layout style={{ height: '100%' }}>
        <OpenCart
          matches={matches}
          items={state.length ? state.reduce((acc, el) => ({ qt: el.qt + acc.qt })).qt : 0}
          onClick={state.length ? () => toggleCollapsed((prev) => !prev) : noitems}
        />
        <Items
          collapsed={collapsed}
          state={state}
          add={(id) => dispatch({
            type: types.INCREMENT,
            payload: { id },
          })}
          dec={(id) => dispatch({
            type: types.DECREMENT,
            payload: { id },
          })}
          remove={(id) => dispatch({
            type: types.REMOVE_ITEM,
            payload: { id },
          })}
        />
        <Checkout
          collapsed={collapsed}
          state={state}
        />
      </Layout>
    </Sider>
  );
};

export default ShoppingCart;
