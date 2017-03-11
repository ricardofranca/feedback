import { crud } from 'api/actions';

export default (store) => {
  return (dispatch) => {
    return (action) => {

      if (action.type === crud.filter) {
        const { entities } = store.getState();
        console.log('mid', action.type, action.payload, entities);
        store.dispatch({
          type: 'FILTER_SUCCESS',
          payload: {
            size: 2,
            rows: [
              {
                id: 12999,
                description: 'Camisa do Vasco',
                price: 350
              },
              {
                id: 12993,
                description: 'Camisa do Corinthians - com sangue do dono',
                price: 10
              },
            ],
          }
        });
      }

      return dispatch(action);
    }
  }
}
