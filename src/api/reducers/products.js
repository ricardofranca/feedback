const initialState = {
  filter: {
    description: '',
    price: '',
  },
  rows: [],
  size: 0,
};

export default (products = initialState, action) => {
console.log('reducer', action.type, action.payload);

  if (action.type === 'CLEAR') {
    return initialState;
  }

  if (action.type === 'FILTER_SUCCESS') {
    return {
      ...products,
      ...action.payload,
    };
  }

  if (action.type === 'onChange') {
    return {
      ...products,
      filter: {
        ...products.filter,
        ...action.payload,
      }
    };
  }

  return products;
}
