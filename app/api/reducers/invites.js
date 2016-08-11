import { INVITES } from 'api/actions';

export default function (state = [], action) {
  if (action.type === INVITES.SUCCESS) {
    const { payload } = action;
    const { invite } = payload;

    let changed = state;
    if (invite) {
      state.forEach((element, index) => {
        if (element.id === invite.id) {
          changed[index] = invite;
        }
      });
    } else {
      changed = action.payload;
    }
    return changed;
  }
  return state;
}
