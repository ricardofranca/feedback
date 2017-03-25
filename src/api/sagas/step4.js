import { takeLatest } from 'redux-saga/effects';
import { call, put, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import actions from 'api/actions';

function fetchFirebase({ email, password }) {
    return window.firebase.auth().createUserWithEmailAndPassword(email, password);
}

function* step4() {
    /* Pega os dados  */
    try {
        yield put(push('/step4'));
        //     const { auth } = yield select();
        //     const user = auth.getIn(['emailSignIn', 'default', 'form']);
        //     const { email, password } = user.toJS();

        //     const payload = yield call(fetchFirebase, { email, password });
        //     yield put(push('/'));

    } catch (payload) {
        yield put({ type: actions.user.registerFailure, payload });
    }
}

export default function* watchStep4() {
    yield takeLatest(actions.user.redirectStep4, step4);
}
