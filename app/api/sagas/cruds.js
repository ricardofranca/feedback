import fetch from 'isomorphic-fetch';
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { FEEDBACKS, INVITES, actions } from 'api/actions';

const createConfig = (method = 'GET', payload = {}) => {
  const config = {
    method,
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  if (method !== 'GET') {
    config.body = JSON.stringify(payload);
  }

  return config;
};

function executeFetch(id, entityUrl, method, payload) {
  const url = (id) ? `/${entityUrl}/${id}.json` : `/${entityUrl}.json`;
  return fetch(url, createConfig(method, payload))
          .then(response => response.json())
          .then(json => json);
}

export function* prepareSaga(action) {
  console.log('Entrou na saga', action);
  const nextAction = actions(action.entity);
  try {
    const payback = yield call(executeFetch,
                            action.payload.id,
                            action.url,
                            action.method,
                            action.payload
                          );
    yield put(nextAction.success(payback));
  } catch (e) {
    yield put(nextAction.failure({ message: e.message }));
  }
}

/**
 * Se precisar de regex, veja
 * https://github.com/yelouafi/redux-saga/issues/392
 */
export function* watchEntities() {
  yield* takeEvery([
    FEEDBACKS.REQUEST,
    FEEDBACKS.SAVE,
    FEEDBACKS.CREATE,
    INVITES.REQUEST,
    INVITES.CREATE,
    INVITES.SAVE,
  ],
    prepareSaga);
}

const filter = key => key.match(/REQUEST/) ||
                      key.match(/CREATE/) ||
                      key.match(/SAVE/) ||
                      key.match(/DELETE/);

export default function crudSagas(entityActions) {
  console.log('CRUD SAGA', entityActions);
  return function* watch() {
    const mapEntries = Object.entries(entityActions)
          .map(entrie => entrie[1])
          .filter(filter);
    console.log('disparou a saga?', mapEntries);
    yield* takeEvery(mapEntries, prepareSaga);
  };
}
