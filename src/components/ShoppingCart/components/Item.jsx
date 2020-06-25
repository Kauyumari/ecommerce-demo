import React from 'react';
import PropTypes from 'prop-types';
import {
  Row, Typography, Layout, Button, Popconfirm,
} from 'antd';
import { MinusOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';

const Header = (props) => {
  const { item } = props;
  return (
    <Row justify="space-between">
      <Typography.Text strong>
        {item.name}
      </Typography.Text>
      <Typography.Text>
        $
        {Number(item.price).toFixed(2)}
        {' x '}
        {Number(item.qt)}
        {' | '}
        $
        {Number(item.price * item.qt).toFixed(2)}
      </Typography.Text>
    </Row>
  );
};

Header.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};

const Item = (props) => {
  const {
    item, dec, add, remove,
  } = props;

  return (

    <Row justify="space-between">
      <img
        style={{ objectFit: 'cover' }}
        src={item.image}
        width={80}
        height={80}
        alt=""
      />
      <Layout style={{ marginLeft: 8, flex: 1 }}>
        <Typography.Title
          level={4}
        >
          {item.name}
        </Typography.Title>
        <Typography.Text>
          $
          {item.price}
          {' - '}
          {item.type}
        </Typography.Text>
      </Layout>
      <Layout style={{ flex: 0.5 }}>
        <Typography.Title level={4}>
          $
          {Number(item.qt * item.price).toFixed(2)}
        </Typography.Title>
        <Row align="center">
          <Button
            size="small"
            onClick={() => dec(item.id)}
            shape="circle-outline"
            icon={<MinusOutlined />}
          />
          <Typography.Text style={{ margin: '0 8px' }}>
            {item.qt}
          </Typography.Text>
          <Button
            size="small"

            onClick={() => add(item.id)}
            shape="circle-outline"
            icon={<PlusOutlined />}
          />
        </Row>
      </Layout>
      <Popconfirm
        title="Delete from cart?"
        placement="left"
        onConfirm={() => remove(item.id)}
      >
        <Button
          danger
          type="primary"
          style={{ height: 'auto' }}
          icon={<DeleteOutlined />}
        />
      </Popconfirm>
    </Row>
  );
};

Item.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  dec: PropTypes.func.isRequired,
  add: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export {
  Item as default,
  Header,
};
