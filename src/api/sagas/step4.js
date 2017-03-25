import { takeLatest } from 'redux-saga/effects';
import { call, put, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import actions from 'api/actions';

function* step4(a) {
    
    /* Pega os dados  */
    try {
        const inviteId = a.payload;

        const { profile } = yield select();

        console.log('saga step 4 => ', profile);

        yield put(push('/step4/' + inviteId, profile));

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
