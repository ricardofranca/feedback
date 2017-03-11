import React, { PropTypes } from 'react';
import ReactDataGrid from 'react-data-grid';

class Products extends React.Component {

  static propTypes = {
    products: PropTypes.shape({
      rows: PropTypes.array.isRequired,
      size: PropTypes.int,
    }),
  }

  getRows = (index) => {
    const { products } = this.props;
    return products.rows[index];
  }

  render() {
    const { products } = this.props;
    const columns = [
      {
        key: 'description',
        name: 'Descrição',
        sortable: true,
      },
      {
        key: 'price',
        name: 'Preço',
        sortable: true,
      },
    ];

    return (
      <div className="Product">
        <div className="Filter">
          <div className="Form">Form</div>
          <div className="Filter__Toolbar">Filter__Toolbar</div>
        </div>
        <div className="Grid">
          <ReactDataGrid
            columns={columns}
            rowGetter={this.getRows}
            rowsCount={products.size}
            minHeight={300}
          />
        </div>
        <div>Toolbar</div>
      </div>
    );
  }
}

export default Products;
