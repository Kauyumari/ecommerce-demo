import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Badge, Button } from 'antd';
import { ShoppingFilled } from '@ant-design/icons';

const { Header } = Layout;

const OpenCart = (props) => {
  const { matches, items, onClick } = props;

  return (
    <Header style={{ padding: '0 16px' }}>
      <Badge count={items}>
        <Button
          size={matches ? 'large' : 'small'}
          onClick={onClick}
          ghost
          shape="circle"
          icon={<ShoppingFilled />}
        />
      </Badge>
    </Header>
  );
};

OpenCart.propTypes = {
  matches: PropTypes.bool,
  items: PropTypes.number,
  onClick: PropTypes.func,
};

OpenCart.defaultProps = {
  matches: false,
  items: 0,
  onClick: () => null,
};

export default OpenCart;
