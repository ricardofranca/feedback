import { FEEDBACKS } from 'api/actions';

export default function (state = [], action) {
  if (action.type === FEEDBACKS.SUCCESS) {
    return action.payload;
  }
  if (action.type === FEEDBACKS.CREATE) {
      console.log(action, state)
  }
  return state;
}
