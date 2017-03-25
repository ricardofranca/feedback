import { fromJS } from 'immutable';
import actions from 'api/actions';

const initialState = fromJS({
  authToken: {},
  user: {
    uid: '',
    email: '',
  },
  navigation: '/',
  emailSignIn: {
    loading: {},
    default: {
      form: {
        email: '',
        password: '',
        rememberMe: false,
        recaptcha: false,
      },
      errors: {}
    }
  }

});

export default (state = initialState, action) => {

  console.log('[AUTH]', action.type, action.payload);

  if (action.type === actions.user.loaded) {
    return initialState;
  }

  if (action.type === actions.user.navigation) {
    return state.set('navigation', action.payload);
  }

  if (action.type === actions.user.updateForm) {
    return state.mergeDeepIn(['emailSignIn', 'default', 'form'], action.payload);
  }

  if (action.type === actions.user.logged) {
    return state.set('user', action.payload);
  }

  if (
    action.type === actions.user.registerFailure ||
    action.type === actions.user.loginFailure
  ) {
    debugger;
    const { code, message } = action.payload;
    return state.mergeDeepIn(['emailSignIn', 'default', 'errors'], {
      [code]: message,
    });
  }
  return state;
}
