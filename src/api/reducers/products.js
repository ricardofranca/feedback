const initialState = {
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
  
  return products;
}
