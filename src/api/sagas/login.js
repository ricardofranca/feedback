import { takeLatest } from 'redux-saga/effects';
import { call, put, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import actions from 'api/actions';

function fetchFirebase({ email, password }) {
  return window.firebase.auth().signInWithEmailAndPassword(email, password);
}

function* login() {
  /* Pega os dados  */
  try {
    const { auth } = yield select();
    const user = auth.getIn(['emailSignIn', 'default', 'form']);
    const { email, password } = user.toJS();
    const payload = yield call(fetchFirebase, { email, password });
    yield put({ type: actions.user.logged, payload });
    yield put(push('/'));
  } catch (payload) {
    yield put({ type: actions.user.loginFailure, payload });
  }

}

export default function* watchLogin() {
  yield takeLatest(actions.user.login, login);
}
