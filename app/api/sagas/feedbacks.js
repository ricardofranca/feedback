import fetch from 'isomorphic-fetch';
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { FEEDBACKS, actions } from 'api/actions';

/* Saga pra buscar a listagem */
function fetchList(id) {
  const url = (id) ? `/feedbacks/${id}.json` : '/feedbacks.json';
  const config = {
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  return fetch(url, config)
          .then(response => response.json())
          .then(json => json);
}

function* fetchFeedbacks(action) {
  const nextAction = actions(FEEDBACKS);
  console.log("Saga", action);
  try {
    const list = yield call(fetchList, action.payload.id);
    yield put(nextAction.success(list));
  } catch (e) {
    yield put(nextAction.failure({ message: e.message }));
  }
}

export function* watchFeedbacks() {
  yield* takeEvery(FEEDBACKS.REQUEST, fetchFeedbacks);
}
