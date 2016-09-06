import { createRequestTypes, actionSave, actionRequest } from 'api/actions';
import reducer from 'api/reducers/cruds';

const SETTINGS = createRequestTypes('SETTINGS');
SETTINGS.URL = 'settings';

export default {
  reducer: reducer(SETTINGS),
  actions: {
    entity: SETTINGS,
  },
  save: (payload) => Object.assign(actionSave(SETTINGS), payload),
  request: () => actionRequest(SETTINGS),
};
