const NAMESPACE = 'FEEDBACK';

export const crud = {
  filter: `${NAMESPACE}-CRUD-FILTER`,
  filterSuccess: `${NAMESPACE}-CRUD-FILTER_SUCCESS`,
  onChange: `${NAMESPACE}-CRUD-FILTER-CHANGE`,
  onClear: '`${NAMESPACE}-CRUD-FILTER-CLEAR`'
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
  }
)
