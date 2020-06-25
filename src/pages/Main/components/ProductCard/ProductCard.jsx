import React, {
  useRef, useEffect, useState,
} from 'react';
import {
  Card, Col, Row, Typography, Tooltip,
} from 'antd';
import Meta from 'antd/lib/card/Meta';
import { ShoppingOutlined } from '@ant-design/icons';
import { ProductModal } from '../../../../components';

const ProductCard = (props) => {
  const {
    name, price, type, image, id, limit = 18, add,
  } = props;
  const [openedModal, toggleModal] = useState();
  const imgRef = useRef();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.addEventListener('load', () => {
        setLoaded(true);
      });
    }
  }, []);

  return (
    <Col xs={24} sm={12} xxl={4} xl={6} lg={8}>
      <Card
        onClick={() => toggleModal(true)}
        hoverable
        loading={!loaded}
        cover={<img ref={imgRef} src={image} alt={name} />}
        actions={[
          <ShoppingOutlined
            key="addToCart"
            onClick={(e) => { e.stopPropagation(); add(); }}
          />,
        ]}
      >
        <Meta
          title={(
            <Row justify="space-between">
              <Tooltip title={name}>
                <Typography.Text>
                  {name.length > limit ? `${name.slice(0, limit)}...` : name}
                </Typography.Text>
              </Tooltip>
              <Typography.Text>
                $
                {price}
              </Typography.Text>
            </Row>
)}
          description={type}
        />
      </Card>
      <ProductModal
        add={add}
        id={id}
        name={name}
        image={image}
        type={type}
        price={price}
        open={openedModal}
        close={() => toggleModal(false)}
      />
    </Col>
  );
};

export default ProductCard;
