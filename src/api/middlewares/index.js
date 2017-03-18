import actions from 'api/actions';
import { push } from 'react-router-redux';

export default (store) => {
  return (dispatch) => {
    return (action) => {

      if (action.type === actions.user.logged) {
        store.dispatch(push('/profile'));
      }

      if (action.type === actions.user.login) {        
        const { auth } = store.getState();
        const user = auth.getIn(['emailSignIn', 'default', 'form']);
        const { email, password } = user.toJS();
        window.firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(payload => {
            const action = push('/profile');
            action.meta = payload;
            store.dispatch(action);
            //store.dispatch({ type: actions.user.logged, payload });
          })
          .catch(payload => {
            console.log(payload);
            store.dispatch({ type: actions.user.loginFailure, payload })
          });
      }

      if (action.type === actions.user.register) {
        const { auth } = store.getState();
        const user = auth.getIn(['emailSignIn', 'default', 'form']);
        const { email, password } = user.toJS();
        window.firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(payload => {
            store.dispatch(push('/login'));
          })
          .catch(payload => {
            console.log(payload);
            store.dispatch({ type: actions.user.registerFailure, payload })
          });
      }

      return dispatch(action);
    }
  }
}
