import fetch from 'isomorphic-fetch';
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { INVITES, actions } from 'api/actions';

function fetchList() {
  return fetch('/invites.json')
          .then(response => response.json())
          .then(json => json);
}

function* fetchInvites() {
  const action = actions(INVITES);
  try {
    const list = yield call(fetchList);
    yield put(action.success(list));
  } catch (e) {
    yield put(action.failure({ message: e.message }));
  }
}

export default function* watchInvites() {
  yield* takeEvery(INVITES.REQUEST, fetchInvites);
}
