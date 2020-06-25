import React from 'react';
import Modal from 'antd/lib/modal/Modal';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';

const ProductModal = (props) => {
  const {
    open, close, name, image, price, type, add,
  } = props;

  return (
    <Modal
      title={name}
      visible={open}
      okText="Add to cart"
      cancelText="Close"
      onCancel={close}
      onOk={(e) => { e.stopPropagation(); add(); close(); }}
    >
      <Card
        cover={<img src={image} alt={name} />}
      >
        <Meta title={price} description={type} />
      </Card>
    </Modal>
  );
};

export default ProductModal;
