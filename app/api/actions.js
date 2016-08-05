export const NAMESPACE = 'PRFEEDBACK';

export const FEEDBACK_INVITES_INVITE_COMPLETED = `${NAMESPACE}_INVITES_INVITE_COMPLETED`;
export const FEEDBACK_OFFLINE = `${NAMESPACE}_OFFLINE`;

const STATUS = ['REQUEST', 'SUCCESS', 'FAILURE'];

const createRequestTypes = base => STATUS.reduce((types, type) => {
  const object = Object.assign({}, types);
  object[type] = `${NAMESPACE}_${base}_${type}`;
  return object;
}, {});

export const FEEDBACKS = createRequestTypes('FEEDBACKS');
export const INVITES = createRequestTypes('INVITES');
