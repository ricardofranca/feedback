import fetch from 'isomorphic-fetch';
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { FEEDBACKS, actions } from 'api/actions';

/* Saga pra buscar a listagem */
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

/* Saga pra criar uma rodada de FEedback */
function create(payload) {
  const config = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };
  return fetch('/feedbacks.json', config)
          .then(response => response.json())
          .then(json => json);
}

function* newFeedback(action) {
  const nextAction = actions(FEEDBACKS);
  try {
    const invite = yield call(create, action.payload);
    yield put(nextAction.success({
      invite,
      operation: 'create',
    }));
  } catch (e) {
    yield put(nextAction.failure({ message: e.message }));
  }
}
export function* saveFeedback() {
  yield* takeEvery(FEEDBACKS.CREATE, newFeedback);
}
