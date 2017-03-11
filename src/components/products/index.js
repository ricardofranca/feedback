import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Dashboard from 'components/products/Dashboard';
import FormNew from 'components/products/FormNew';
import FormEdit from 'components/products/FormEdit';

class Products extends React.Component {

  render() {
    const { products, location: { pathname } } = this.props;
    const [, entity, mode, id] = pathname.split('/');
    let container;
    switch (mode) {
      case 'edit':
        container = <FormEdit mode={mode} entity={entity} entityId={id} />;
        break;
      case 'new':
        container = <FormNew  mode={mode} entity={entity} />;
        break;
      default:
        container = <Dashboard entity={entity} />;
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
