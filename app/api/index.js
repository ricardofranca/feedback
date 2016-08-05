import offline from 'api/reducers/offline';
import bellNotify from 'api/reducers/bellnotify';
import feedbacksReducer from 'api/reducers/feedbacks';
import feedbacks from 'api/sagas/feedbacks.js';

export default {
  reducers: {
    offline,
    bellNotify,
    feedbacks: feedbacksReducer,
  },
  sagas: {
    feedbacks,
  },
};
