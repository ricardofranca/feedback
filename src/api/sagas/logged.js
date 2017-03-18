import { takeLatest } from 'redux-saga/effects';
import { call, put, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import actions from 'api/actions';

function* logged(action) {
  const { payload } = action;
  
  if (payload && payload.email) {
    const { auth } = yield select();
    yield put(push(auth.get('navigation')));
  } else {
    yield put(push('/login'));
  }
}

export default function* watchLogged() {
  yield takeLatest(actions.user.logged, logged);
}
