import { FEEDBACKS } from 'api/actions';

export default function (state = true, action) {
  if (action.type === FEEDBACKS.NEW) {
    return true;
  }
  return state;
}
