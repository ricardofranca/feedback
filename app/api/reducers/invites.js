import { INVITES } from 'api/actions';

export default function (state, action) {
  if (!state) return [];

  if (action.type === INVITES.SUCCESS) {
    return action.payload;
  }

  return state;
}
