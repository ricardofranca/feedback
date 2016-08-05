import { FEEDBACKS } from 'api/actions';

export default function (state, action) {
  if (!state) return [];

  if (action.type === FEEDBACKS.SUCCESS) {
    return action.payload;
  }

  return state;
}
