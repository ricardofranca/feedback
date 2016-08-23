import fetch from 'isomorphic-fetch';
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { FEEDBACKS, INVITES, actions } from 'api/actions';

const createConfig = (method = 'GET') => {
  return {
    method,
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
};

/**
 * Saga pra buscar a listagem tanto de
 * Feedback quanto de Invites
 */
function executeFetch(id, entityUrl, method) {
  const url = (id) ? `/${entityUrl}/${id}.json` : `/${entityUrl}.json`;
  return fetch(url, createConfig())
          .then(response => response.json())
          .then(json => json);
}

function* prepareSaga(action) {
  const nextAction = actions(action.entity);
  try {
    const payback = yield call(executeFetch,
                            action.payload.id,
                            action.url,
                            action.method
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
    INVITES.SAVE
  ],
    prepareSaga);
}
