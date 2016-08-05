import { FEEDBACK_OFFLINE } from 'api/actions';

export default function (state = false, action) {
  if (action.type === FEEDBACK_OFFLINE) {
    return action.payload;
  }

  return state;
}
