import { takeLatest } from 'redux-saga/effects';
import { call, put, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import actions from 'api/actions';

function fetchFirebase() {
  return window.firebase.auth().signOut();
}

function* logout() {
  yield call(fetchFirebase);
}

export default function* watchLogout() {
  yield takeLatest(actions.user.logout, logout);
}
