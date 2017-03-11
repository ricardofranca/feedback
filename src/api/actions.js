const NAMESPACE = 'FEEDBACK';

export const crud = {
  filter: `${NAMESPACE}-CRUD-FILTER`,
  filterSuccess: `${NAMESPACE}-CRUD-FILTER-SUCCESS`,
  onChange: `${NAMESPACE}-CRUD-FILTER-CHANGE`,
  onClear: `${NAMESPACE}-CRUD-FILTER-CLEAR`,
  find: `${NAMESPACE}-CRUD-FIND`,
  findSuccess: `${NAMESPACE}-CRUD-FIND-SUCCESS`,
}

export default dispatch => (
  {
    onChange: payload => (
      dispatch({ type: crud.onChange, payload })
    ),
    onClear: () => (
      dispatch({ type: crud.onClear })
    ),
    onSubmit: () => (
      dispatch({ type: crud.filter })
    ),
    request: payload => (
      dispatch({ type: crud.find, payload })
    ),
  }
)
