import { takeLatest } from 'redux-saga/effects';
import { call, put, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import actions from 'api/actions';

function fetchFirebase({ email, password }) {
  return window.firebase.auth().createUserWithEmailAndPassword(email, password);
}

function* register() {
  /* Pega os dados  */
  try {
    debugger;
    const { auth } = yield select();
    const user = auth.getIn(['emailSignIn', 'default', 'form']);
    const { email, password } = user.toJS();

    const payload = yield call(fetchFirebase, { email, password });
    yield put(push('/'));
  } catch (payload) {
    yield put({ type: actions.user.registerFailure, payload });
  }

}

export default function* watchRegister() {
  yield takeLatest(actions.user.register, register);
}
