import { FEEDBACKS } from 'api/actions';

export default function (state = [], action) {
  if (action.type === FEEDBACKS.SUCCESS) {

    if(action.payload.operation === 'create') {
      state.push(action.payload.feedback);
    } else {
      return action.payload;
    }

  }
  return state;
}
