import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Form from 'components/products/filter/Form';

class Filter extends React.Component {

  apply = (event) => {
    event.preventDefault();
    event.stopPropagation();
    this.props.dispatch({
      type: 'FILTER',
    });
  }

  clear = (event) => {
    this.props.dispatch({
      type: 'CLEAR',
    });
  }

  render() {

    return (
      <div className="Filter">
        <Form dispatch={this.props.dispatch} />
        <div className="Filter__Toolbar">
          <button onClick={this.apply}>Aplicar</button>
          <button onClick={this.clear}>Limpar</button>
        </div>
      </div>
    );
  }
}

export default connect(null)(Filter);
