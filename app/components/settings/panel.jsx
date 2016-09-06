import React from 'react';
import { local } from 'redux-react-local';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';
import api from 'components/settings/api';

@local({
  ident: 'settings',
  initial: {
    email: '',
    imageUrl: '',
    name: '',
    id: null,
  },
  reducer: api.reducer,
  persist: false,
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
    dispatch(api.request());
  }

  save = (event, isInputChecked) => {
    const { dispatch, state } = this.props;
    const { id } = state;
    const action = api.save({
      payload: {
        id,
        notifications: isInputChecked,
      },
    });
    dispatch(action);
  }

  render() {
    const style = {
      margin: '10px',
    };
    const { state } = this.props;
    const { email, imageUrl, name, notifications } = state;
    const save = this.save;
    return (
      <Card style={style}>
        <CardHeader
          title={name}
          subtitle={email}
          avatar={imageUrl}
        />
        <CardText>
          <Toggle
            label="Notifications"
            defaultToggled={notifications}
            onToggle={save}
          />
        </CardText>
      </Card>
    );
  }
}
