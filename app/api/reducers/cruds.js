export default (entity) => (state = [], action) => {
  if (action.type === entity.SUCCESS) {
    return action.payload;
  }
  return state;
};
