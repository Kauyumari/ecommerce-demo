import React from 'react';
import PropTypes from 'prop-types';
import {
  Layout,
} from 'antd';

import ItemMapper from './ItemMapper';

const { Content } = Layout;
const Items = (props) => {
  const {
    collapsed, state, add, dec, remove,
  } = props;

  return (
    <Content
      style={{
        flex: collapsed ? 0 : 1,
        overflow: collapsed ? 'hidden' : 'auto',
      }}
    >
      <ItemMapper
        state={state}
        add={add}
        dec={dec}
        remove={remove}
      />
    </Content>
  );
};

Items.propTypes = {
  collapsed: PropTypes.bool,
  state: PropTypes.arrayOf(PropTypes.object),
  add: PropTypes.func,
  dec: PropTypes.func,
  remove: PropTypes.func,
};

Items.defaultProps = {
  collapsed: true,
  state: [],
  add: () => null,
  dec: () => null,
  remove: () => null,
};

export default Items;
