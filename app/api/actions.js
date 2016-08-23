export const NAMESPACE = 'PRFEEDBACK';

export const FEEDBACK_INVITES_INVITE_COMPLETED = `${NAMESPACE}_INVITES_INVITE_COMPLETED`;
export const FEEDBACK_OFFLINE = `${NAMESPACE}_OFFLINE`;

const STATUS = ['REQUEST', 'SUCCESS', 'FAILURE', 'SAVE', 'CREATE', 'DELETE', 'NEW'];

const createRequestTypes = base => STATUS.reduce((types, type) => {
  const object = Object.assign({}, types);
  object[type] = `${NAMESPACE}_${base}_${type}`;
  return object;
}, {});

export const FEEDBACKS = createRequestTypes('FEEDBACKS');
export const INVITES = createRequestTypes('INVITES');

FEEDBACKS.URL = 'feedbacks';
INVITES.URL = 'invites';

export const action = (type, payload = {}) => ({ type, ...payload });

export const actions = ({ SUCCESS, FAILURE }) => ({
  success: (payload) => action(SUCCESS, { payload }),
  failure: (error) => action(FAILURE, { error }),
});

export const actionCreate = (entity) => ({
  entity,
  type: entity.CREATE,
  method: 'POST',
  url: entity.URL,
})
