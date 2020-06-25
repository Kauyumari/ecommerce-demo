import React, { useReducer } from 'react';
import { Layout } from './components';
import CartProvider, { initialState } from './cart/store/cart';
import cartReducer from './cart/reducer/cartReducer';
import { Main } from './pages';

function App() {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartProvider
      value={{ state, dispatch }}
    >
      <Layout>
        <Main />
      </Layout>
    </CartProvider>
  );
}

export default App;
