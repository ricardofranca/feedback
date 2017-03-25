import { fork } from 'redux-saga/effects';
import watchRegister from 'api/sagas/register';
import watchLogin from 'api/sagas/login';
import watchLogged from 'api/sagas/logged';
import watchLogout from 'api/sagas/logout';
import watchStep4 from 'api/sagas/step4';

function* rootSagas() {
  yield fork(watchRegister);
  yield fork(watchLogin);
  yield fork(watchLogged);
  yield fork(watchLogout);
  yield fork(watchStep4);
}

export default rootSagas;
