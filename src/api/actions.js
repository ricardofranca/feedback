const NAMESPACE = 'FEEDBACK';

export const crud = {
  filter: `${NAMESPACE}-CRUD-FILTER`,
  filterSuccess: `${NAMESPACE}-CRUD-FILTER_SUCCESS`,
  onChange: `${NAMESPACE}-CRUD-FILTER-CHANGE`,
}

export default dispatch => (
  {
    onChange: payload => (
      dispatch({ type: crud.onChange, payload })
    )
  }
)
