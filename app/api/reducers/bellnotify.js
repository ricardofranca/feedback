import { FEEDBACK_INVITES_INVITE_COMPLETED } from 'api/actions';

export default function (state = false, action) {
  if (action.type === FEEDBACK_INVITES_INVITE_COMPLETED) {
    return true;
  }
  return state;
}
