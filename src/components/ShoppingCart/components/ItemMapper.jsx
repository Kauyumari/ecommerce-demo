import React from 'react';
import PropTypes from 'prop-types';
import { Collapse } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import Item, { Header } from './Item';

const { Panel } = Collapse;

const ItemMapper = (props) => {
  const {
    state, dec, add, remove,
  } = props;

  return (
    <Collapse
      bordered={false}
      expandIcon={({ isActive }) => (isActive ? <MinusOutlined /> : <PlusOutlined />)}
    >
      {state.map((item) => (
        <Panel header={<Header item={item} />}>
          <Item
            key={item.id}
            item={item}
            dec={dec}
            add={add}
            remove={remove}
          />
        </Panel>
      ))}
    </Collapse>
  );
};

ItemMapper.propTypes = {
  state: PropTypes.arrayOf(PropTypes.object),
  dec: PropTypes.func,
  add: PropTypes.func,
  remove: PropTypes.func,
};

ItemMapper.defaultProps = {
  state: [],
  dec: () => null,
  add: () => null,
  remove: () => null,
};

export default ItemMapper;
