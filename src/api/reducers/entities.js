import { crud } from 'api/actions';

const initialState = {
  products: {
    errors: [],
    edit: [
      {
        key: 'id',
        label: '',
        value: '',
        type: 'hidden',
      },
      {
        key: 'description',
        label: 'Descrição',
        value: '',
      },
      {
        key: 'price',
        label: 'Preço',
        value: '',
        isInvalid: (value) => {
          return (value > 10) ? 'Não pode ser > 10' : null;
        }
      },
    ],
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

  if (action.type === crud.findSuccess) {
    const { entity, data } = action.payload;
    const form = state[entity]['edit'];
    const newForm = form.map(field => {
      const value = data[field.key] || field.value;
      return {
        ...field,
        value,
      }
    });
    return {
      ...state,
      [entity]: {
        ...state[entity],
        edit: newForm,
      }
    };

  }

  if (action.type === crud.onClear) {
    return initialState;
  }

  if (action.type === crud.onChange) {
    const { entity, form, mode } = action.payload;
    const schema = state[entity];
    const { errors } = schema;
    const filter = schema[mode];
    const newFilter = filter.map(item => {

      const newValue = form[item.key];
      if (item.isInvalid) {
        const msg = item.isInvalid(newValue);
        if (msg) {
          errors.push(msg);
        }
      }

      const value = newValue || item.value;
      return {
        ...item,
        value
      }
    });

    return {
      ...state,
      [entity]: {
        ...state[entity],
        errors,
        [mode]: newFilter,
      }
    };
  }

  return state;
}
