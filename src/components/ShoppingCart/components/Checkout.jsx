import React from 'react';
import {
  Layout, Typography, Row, Col, Button,
} from 'antd';

const { Content } = Layout;
const Checkout = (props) => {
  const { collapsed, state } = props;

  return (
    <Content
      style={{
        flex: collapsed ? 0 : 0.4,
        overflow: collapsed ? 'hidden' : 'auto',
      }}
    >
      <Row
        style={{ padding: 16 }}
        justify="space-between"
        align="middle"
      >
        <Col>
          <Typography.Title>
            Total:
          </Typography.Title>
        </Col>
        <Col>
          <Typography.Title>
            $
            {state.length && Number(state
              .map(
                (item) => item.qt * item.price,
              )
              .reduce(
                (acc, curr) => acc + curr,
              )).toFixed(2)}
          </Typography.Title>
        </Col>
      </Row>
      <Layout style={{ padding: 16 }}>
        <Button block>
          Checkout
        </Button>
      </Layout>
    </Content>
  );
};

export default Checkout;
