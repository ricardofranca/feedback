import { fork } from 'redux-saga/effects';
import watchFeedbacks from 'api/sagas/watchFeedbacks.js';

export default function* Sagas() {
  yield fork(watchFeedbacks);
}
