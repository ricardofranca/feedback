import { crud } from 'api/actions';

const row = {
  id: 12993,
  description: 'Camisa do Corinthians - com sangue do dono',
  price: 10
};

export default (store) => {
  return (dispatch) => {
    return (action) => {

      if (action.type === crud.find) {
        const { entity } = action.payload;
        store.dispatch({
          type: crud.findSuccess,
          payload: {
            entity,
            data: row,
          },
        });
      }

      if (action.type === crud.filter) {
        const { entities } = store.getState();
        console.log('mid', action.type, action.payload, entities);
        store.dispatch({
          type: crud.filterSuccess,
          payload: {
            size: 2,
            rows: [
              {
                id: 12999,
                description: 'Camisa do Vasco',
                price: 350
              },
              row,
            ],
          }
        });
      }

      return dispatch(action);
    }
  }
}
