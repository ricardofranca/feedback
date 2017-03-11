import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Dashboard from 'components/products/Dashboard';
import FormNew from 'components/products/FormNew';

class Products extends React.Component {

  render() {
    const { products, location: { pathname } } = this.props;
    let container;

    switch (pathname) {
      case '/products/new':
        container = <FormNew entity="products" />;
        break;
      default:
        container = <Dashboard entity="products" />;
    }

    return (
      <div className="Product">
        {container}
      </div>
    );
  }
}

export default connect(
  ({ products, routing }) => ({ products, routing })
)(Products);
