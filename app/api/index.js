import offline from 'api/reducers/offline';
import bellNotify from 'api/reducers/bellnotify';
import feedbacksReducer from 'api/reducers/feedbacks';
import invitesReducer from 'api/reducers/invites';
import failure from 'api/reducers/failure';
import sagas from 'api/sagas';

export default {
  reducers: {
    failure,
    offline,
    bellNotify,
    feedbacks: feedbacksReducer,
    invites: invitesReducer,
  },
  sagas,
};
