import { fork } from 'redux-saga/effects';

import { watchFeedbacks, createFeedback } from './feedbacks.js';
import { watchInvites, saveInvite } from './invites.js';

export default function* rootSaga() {
  yield fork(watchFeedbacks);
  yield fork(createFeedback);
  yield fork(watchInvites);
  yield fork(saveInvite);
}
