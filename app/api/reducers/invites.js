import { INVITES } from 'api/actions';

export default function (state = [], action) {
  if (action.type === INVITES.SUCCESS) {
    const { payload } = action;
    const changed = state;
    if (Array.isArray(payload)) {
      return action.payload;
    } else {
      state.forEach((element, index) => {
        if (element.id === payload.id) {
          changed[index] = payload;
        }
      });
    }
    return changed;
  }
  return state;
}
