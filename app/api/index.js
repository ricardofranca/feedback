export const FEEDBACK_INVITES_INVITE_COMPLETED = "FEEDBACK_INVITES_INVITE_COMPLETED";
export const FEEDBACK_OFFLINE = 'FEEDBACK_OFFLINE';

function bellNotify(state, action) {
  if (typeof state === 'undefined') {
    state = false;
  }

  if(action.type === FEEDBACK_INVITES_INVITE_COMPLETED) {
    state = true;
  }

  return state;
};

function offline(state, action) {
  if (typeof state === 'undefined') {
    state = false;
  }

  if(action.type === FEEDBACK_OFFLINE) {
    state = action.payload;
  }

  return state;
};

export default {
  offline: offline,
  bellNotify: bellNotify
};