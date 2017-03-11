import { crud } from 'api/actions';

const initialState = {
  products: {
    filter: [
      {
        key: 'description',
        label: 'Descrição',
        value: '',
      },
      {
        key: 'price',
        label: 'Preço',
        value: '',
      },
    ]
  }
}

export default (state = initialState, action) => {

  if (action.type === crud.onClear) {
    return initialState;
  }

  if (action.type === crud.onChange) {
    const { entity, form } = action.payload;
    const filter = state[entity].filter;
    const newFilter = filter.map(item => {
      const value = form[item.key] || item.value;
      return {
        ...item,
        value
      }
    });

    return {
      ...state,
      [entity]: {
        filter: newFilter,
      }
    };
  }

  return state;
}
