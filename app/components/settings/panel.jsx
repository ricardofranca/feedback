import React from 'react';
import { local } from 'redux-react-local';
import { saga } from 'react-redux-saga';
import { call, put } from 'redux-saga/effects';

function executeFetch() {
  const url = '/settings.json';
  return fetch(url, {
    method: 'GET',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(response => response.json())
    .then(json => json);
}

@local({
  ident: 'settings',
  initial: {
    email: '',
    imageUrl: '',
    name: 'cmilfont',
    id: null,
  },
  reducer(state, action) {
    if (action.type === 'SETTINGS_SUCCESS') {
      return action.payload;
    }
    return state;
  },
  persist: false,
})
@saga(function*(state, props){
  const payload = yield call(executeFetch);
  state.dispatch({
    type: 'SETTINGS_SUCCESS',
    payload,
  });
})
export default class Panel extends React.Component {

  static contextTypes = {
    $$local: React.PropTypes.func.isRequired,
  }

  static propTypes = {
    dispatch: React.PropTypes.func,
    state: React.PropTypes.object,
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'OPEN_SETTINGS',
    });
  }
  render() {
    const { state } = this.props;
    const { email, imageUrl, id, name } = state;
    return (
      <div>
        {email}
        {name}
        {id}
        {imageUrl}
      </div>
    );
  }
}
