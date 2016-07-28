export const FEEDBACK_INVITES_INVITE_COMPLETED = "FEEDBACK_INVITES_INVITE_COMPLETED";
export const FEEDBACK_OFFLINE = 'FEEDBACK_OFFLINE';
export const FEEDBACK_LIST_REQUEST = 'FEEDBACK_LIST_REQUEST';

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

function feedbacks(state, action) {

  const initialState = {
    data: []
  };

  const options = {
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
  };

  console.log(state, action);
  if(!state) return initialState;

  if(action.type === FEEDBACK_LIST_REQUEST) {
    state = action.payload.feedbacks;
  }

  return state;

};

export default {
  offline: offline,
  bellNotify: bellNotify,
  feedbacks: feedbacks
};