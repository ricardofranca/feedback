import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import mapCrudDispatchToProps from 'api/actions'

class Engine extends React.Component {

  onChange = ({ target: { name, value } }) => {
    const { entity, onChange } = this.props;
    onChange({
      entity,
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

  render() {
    const { entity, entities, onClear } = this.props;
    const schema = entities[entity] || [];
    const container = schema.filter.map(this.createFields);
    return (
      <div className="Form">
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
