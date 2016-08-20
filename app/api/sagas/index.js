import { fork } from 'redux-saga/effects';

import { watchFeedbacks } from './feedbacks.js';
import { watchInvites, saveInvite } from './invites.js';

export default function* rootSaga() {
  yield fork(watchFeedbacks);
  yield fork(watchInvites);
  yield fork(saveInvite);
}
