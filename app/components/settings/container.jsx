import React from 'react';
import { Saga } from 'react-redux-saga';
import crudSagas from 'api/sagas/cruds.js';
import api from 'components/settings/api';
import Panel from 'components/settings/panel.jsx';

export default function () {
  return (
    <Saga saga={crudSagas(api.actions.entity)}>
      <Panel />
    </Saga>
  );
}
