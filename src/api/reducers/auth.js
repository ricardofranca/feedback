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
        email: 'cmilfont@gmail.com',
        password: 'testes55',
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
    return state.merge(action.payload);
  }
  if (action.type === actions.user.loginFailure) {
    return state.mergeDeepIn(['emailSignIn', 'default'], action.payload);
  }
  if (action.type === actions.user.registerFailure) {
    const { code, message } = action.payload;
    return state.mergeDeepIn(['emailSignIn', 'default', 'errors'], {
      [code]: message,
    });
  }
  return state;
}
