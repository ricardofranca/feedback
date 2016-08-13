import { FEEDBACKS } from 'api/actions';

export default function (state = false, action) {
  if (action.type === FEEDBACKS.NEW) {
    return action.payload;
  }
  return state;
}
