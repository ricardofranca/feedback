import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import mapCrudDispatchToProps from 'api/actions'

class Engine extends React.Component {

  onChange = ({ target: { name, value } }) => {
    const { entity, onChange, mode } = this.props;
    onChange({
      entity,
      mode,
      form: {
        [name]: value,
      }
    });
  }

  createFields = (field) => {
    const { key, label, value } = field;
    return (
      <div key={`field-${key}`}>
        <input
          id={key}
          name={key}
          value={value}
          onChange={this.onChange}
        />
        <label htmlFor={key}>{label}</label>
      </div>
    );
  }

  apply = (event) => {
    event.preventDefault();
    event.stopPropagation();
    this.props.onSubmit();
  }

  componentDidMount() {
    const { entity, entityId: id, request } = this.props;
    if (id) {
      request({ entity, id });
    }
  }


  render() {
    const { entity, entities, onClear, mode } = this.props;
    const schema = entities[entity] || [];
    const { errors } = schema;
    const container = schema[mode].map(this.createFields);
    return (
      <div className="Form">
        <div className="errors">
          {errors}
        </div>
        <form onSubmit={this.apply}>
          {container}
        </form>
        <div className="Filter__Toolbar">
          <button onClick={this.apply}>Aplicar</button>
          <button onClick={onClear}>Limpar</button>
        </div>
      </div>
    );
  }
}

export default connect(
  ({ entities }) => ({ entities }),
  mapCrudDispatchToProps
)(Engine);
