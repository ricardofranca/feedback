import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

class Form extends React.Component {

  apply = (event) => {
    event.preventDefault();
    event.stopPropagation();
    this.props.dispatch({
      type: 'FILTER',
    });
  }

  onChange = ({ target: { name, value } }) => {
    this.props.dispatch({
      type: 'onChange',
      payload: {
        [name]: value,
      }
    });
  }

  render() {
    const {
      products: {
        filter: { description, price }
      }
    } = this.props;
    return (
      <div className="Form">
        <form onSubmit={this.apply}>
          <div>
            <input onChange={this.onChange} value={description} id="description" name="description" />
            <label htmlFor="description">Descrição</label>
          </div>
          <div>
            <input onChange={this.onChange} value={price} id="price" name="price" />
            <label htmlFor="price">Preço</label>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  ({ products }) => ({ products })
)(Form);
