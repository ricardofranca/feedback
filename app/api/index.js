import offline from 'api/reducers/offline';
import bellNotify from 'api/reducers/bellnotify';
import feedbacksReducer from 'api/reducers/feedbacks';
import invitesReducer from 'api/reducers/invites';
import openNewFeedbackReducer from 'api/reducers/opennewfeedback';
import sagas from 'api/sagas';

export default {
  reducers: {
    offline,
    bellNotify,
    feedbacks: feedbacksReducer,
    invites: invitesReducer,
    openNewFeedback: openNewFeedbackReducer
  },
  sagas,
};
