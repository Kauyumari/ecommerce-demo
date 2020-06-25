const cartReducer = (state, action) => {
  const arr = [...state];
  const index = state.findIndex((item) => item.id === action.payload.id);
  switch (action.type) {
    case 'ADD_ITEM':
      if (state.find((item) => item.id === action.payload.id)) {
        arr[index].qt += 1;
        return arr;
      }
      arr.push({
        ...action.payload,
        qt: 1,
      });
      return arr;

    case 'INCREMENT':
      arr[index].qt += 1;

      return arr;
    case 'DECREMENT':
      arr[index].qt -= 1;
      if (arr[index].qt < 1) {
        arr.splice(index, 1);
      }
      return arr;
    case 'REMOVE_ITEM':
      arr.splice(index, 1);
      return arr;
    default:
      return state;
  }
};

const types = {
  ADD_ITEM: 'ADD_ITEM',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  REMOVE_ITEM: 'REMOVE_ITEM',
};

export {
  cartReducer as default,
  types,
};
