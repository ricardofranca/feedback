import { fork } from 'redux-saga/effects';
import watchRegister from 'api/sagas/register';
import watchLogin from 'api/sagas/login';
import watchLogged from 'api/sagas/logged';

function* rootSagas() {
  yield fork(watchRegister);
  yield fork(watchLogin);
  yield fork(watchLogged);
}

export default rootSagas;
