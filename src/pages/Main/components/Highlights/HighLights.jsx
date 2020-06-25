import React from 'react';
import { Row } from 'antd';

import HighLight from '../HighLight/HighLight';

const HighLights = (props) => {
  const { products } = props;
  return (
    <Row>
      {products.map(({ title, img }) => (
        <HighLight key={img} title={title} img={img} />
      ))}
    </Row>
  );
};

export default HighLights;
