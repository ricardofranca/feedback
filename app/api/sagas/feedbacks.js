import fetch from 'isomorphic-fetch';
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { FEEDBACKS } from 'api/actions';

const action = (type, payload = {}) => {
  const json = {
    type,
    ...payload,
  };
  return json;
};

const actions = {
  success: (payload) => action(FEEDBACKS.SUCCESS, { payload }),
  failure: (error) => action(FEEDBACKS.FAILURE, { error }),
};

function fetchList() {
  return fetch('/feedbacks.json')
          .then(response => response.json())
          .then(json => json);
}

function* fetchFeedbacks() {
  try {
    const list = yield call(fetchList);
    yield put(actions.success(list));
  } catch (e) {
    yield put(actions.failure({ message: e.message }));
  }
}

export default function* feedbacks() {
  yield* takeEvery(FEEDBACKS.REQUEST, fetchFeedbacks);
}
