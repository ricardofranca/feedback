import { fork } from 'redux-saga/effects';
import watchRegister from 'api/sagas/register';

function* rootSagas() {
  yield fork(watchRegister);
}

export default rootSagas;
