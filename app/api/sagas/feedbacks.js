import fetch from 'isomorphic-fetch';
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { FEEDBACKS, actions } from 'api/actions';

function fetchList(id) {
  const url = (id) ? `/feedbacks/${id}.json` : '/feedbacks.json';
  return fetch(url)
          .then(response => response.json())
          .then(json => json);
}

function* fetchFeedbacks(action) {
  const nextAction = actions(FEEDBACKS);
  try {
    const list = yield call(fetchList, action.payload.id);
    yield put(nextAction.success(list));
  } catch (e) {
    yield put(nextAction.failure({ message: e.message }));
  }
}

export default function* watchFeedbacks() {
  yield* takeEvery(FEEDBACKS.REQUEST, fetchFeedbacks);
}
