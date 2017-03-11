import { crud } from 'api/actions';

const initialState = {
  entity: null,
  rows: [],
  size: 0,
};

export default (products = initialState, action) => {
console.log('reducer', action.type, action.payload);

  if (action.type === 'CLEAR') {
    return initialState;
  }

  if (action.type === crud.findSuccess) {
    const { payload: { entity, data } } = action;
    if (entity === 'products') {
      return {
        ...products,
        entity: data,
      };
    }
  }

  if (action.type === crud.filterSuccess) {
    return {
      ...products,
      ...action.payload,
    };
  }

  return products;
}
