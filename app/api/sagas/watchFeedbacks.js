import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import uuid from 'uuid';

function create(feedback) {
  const ref = window.firebase.database().ref(`feedbacks/${feedback.uuid}`);
  return ref.update(feedback).then(() => {
     return feedback;
  });
}

function* createAndRedirect() {
  //const user = yield call();
  const feedback = {
    uuid: uuid(),
    owner: {
      photo: 'https://i.ytimg.com/vi/eOifa1WrOnQ/maxresdefault.jpg',
      id: '',
      name: 'Joaozim',
    },
    description: 'Olar q hase',
    inviteds: [],
    range1: {
      start: '',
      end: '',
    }
  };
  const payload = yield call(create, feedback);
  yield put({
    type: 'FEEDBACKS_CREATE_SUCCESS',
    payload,
  })

}

export default function* watchFeedbacks() {
  yield* takeLatest('FEEDBACKS_CREATE', createAndRedirect);
}
