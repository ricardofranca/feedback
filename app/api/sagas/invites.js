import fetch from 'isomorphic-fetch';
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { INVITES, actions } from 'api/actions';

function fetchList(id) {
  const url = (id) ? `/invites/${id}.json` : '/invites.json';
  return fetch(url)
          .then(response => response.json())
          .then(json => json);
}

function* fetchInvites(action) {
  const nextAction = actions(INVITES);
  try {
    const list = yield call(fetchList, action.payload.id);
    yield put(nextAction.success(list));
  } catch (e) {
    yield put(nextAction.failure({ message: e.message }));
  }
}

function save(payload) {
  const config = {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };
  const url = (payload.id) ? `/invites/${payload.id}.json` : '/invites.json';
  return fetch(url, config)
          .then(response => response.json())
          .then(json => json);
}

function* updateInvite(action) {
  const nextAction = actions(INVITES);
  try {
    const invite = yield call(save, action.payload);
    yield put(nextAction.success({
      invite,
      operation: 'filter',
    }));
  } catch (e) {
    yield put(nextAction.failure({ message: e.message }));
  }
}

export function* watchInvites() {
  yield* takeEvery(INVITES.REQUEST, fetchInvites);
}

export function* saveInvite() {
  yield* takeEvery(INVITES.SAVE, updateInvite);
}
