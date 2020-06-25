import React, { useState, useEffect } from 'react';
import { Space, Typography } from 'antd';
import { getAll } from '../../consumer/StoreApi';
import { Listing, HighLights } from './components';

const Main = () => {
  const [products, setProducts] = useState({ loading: true });

  useEffect(() => {
    getAll()
      .then((res) => {
        setProducts({ ...res, loading: false });
      })
      .catch((e) => {
        setProducts({ ...e, loading: false });
      });
  }, []);

  return (
    <Space size="large" direction="vertical">
      <Typography.Title>Welcome</Typography.Title>
      <HighLights products={[
        {
          title: 'Check this out!',
          img: 'https://lifeonvirginiastreet.com/wp-content/uploads/2019/02/coastal-kitchen-full-821x1024.jpg',
        },
        {
          title: 'You gotta know!',
          img: 'https://lifeonvirginiastreet.com/wp-content/uploads/2019/02/Benjamin-Moore-Chantilly-Lace-via-Studio-McGee-683x1024.jpg',
        },
      ]}
      />
      <Listing products={products} />
    </Space>
  );
};

export default Main;
