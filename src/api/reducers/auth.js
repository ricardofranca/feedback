import { fromJS } from 'immutable';
import actions from 'api/actions';

const initialState = fromJS({
  authToken: {},
  user: {
    email: '',
  },
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
  if (action.type === actions.user.loaded) {
    return initialState;
  }
  if (action.type === actions.user.updateForm) {
    return state.mergeDeepIn(['emailSignIn', 'default', 'form'], action.payload);
  }

  if (action.type === actions.user.logged) {
    return state.mergeDeepIn(['user'], action.payload);
  }

  if (
    action.type === actions.user.registerFailure ||
    action.type === actions.user.loginFailure
  ) {
    const { code, message } = action.payload;
    return state.mergeDeepIn(['emailSignIn', 'default', 'errors'], {
      [code]: message,
    });
  }
  return state;
}
