import React from 'react';

const initialState = [];

const CartContext = React.createContext();

const CartProvider = CartContext.Provider;

export {
  CartProvider as default,
  initialState,
  CartContext,
};
