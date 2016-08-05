import fetch from 'isomorphic-fetch';
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { FEEDBACKS, actions } from 'api/actions';

function fetchList() {
  return fetch('/feedbacks.json')
          .then(response => response.json())
          .then(json => json);
}

function* fetchFeedbacks() {
  const action = actions(FEEDBACKS);
  try {
    const list = yield call(fetchList);
    yield put(action.success(list));
  } catch (e) {
    yield put(action.failure({ message: e.message }));
  }
}

export default function* watchFeedbacks() {
  yield* takeEvery(FEEDBACKS.REQUEST, fetchFeedbacks);
}
