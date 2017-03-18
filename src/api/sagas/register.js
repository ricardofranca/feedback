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
    const { auth } = yield select();
    const user = auth.getIn(['emailSignIn', 'default', 'form']);
    const { email, password } = user.toJS();

    const payload = yield call(fetchFirebase, { email, password });
    yield put({ type: actions.user.logged, payload });
    yield put(push('/profile'));
  } catch (error) {
    //yield put({ type: actions.user.registerFailure, payload });
  }

}

export default function* watchRegister() {
  yield takeLatest(actions.user.register, register);
}
