import { FEEDBACKS } from 'api/actions';

export default function (state = [], action) {
  console.log("Reducer", state, action);
  if (action.type === FEEDBACKS.SUCCESS) {
    return action.payload;
  }
  return state;
}
