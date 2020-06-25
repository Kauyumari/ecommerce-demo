import React, { useContext } from 'react';
import { Row } from 'antd';
import ProductCard from '../ProductCard/ProductCard';
import { CartContext } from '../../../../cart/store/cart';
import { types } from '../../../../cart/reducer/cartReducer';

const Listing = (props) => {
  const { products } = props;
  const { dispatch } = useContext(CartContext);

  return !products.loading && (
    <Row gutter={[24, 24]}>
      {products.data.map(({
        name, price, type, image, id,
      }) => (
        <ProductCard
          add={() => dispatch({
            type: types.ADD_ITEM,
            payload: {
              name,
              price,
              type,
              image,
              id,
            },
          })}
          key={id}
          id={id}
          name={name}
          price={price}
          type={type}
          image={image}
        />
      ))}
    </Row>
  );
};

export default Listing;
