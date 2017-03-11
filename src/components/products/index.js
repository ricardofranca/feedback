import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ReactDataGrid from 'react-data-grid';
import Filter from 'components/products/filter';

class Products extends React.Component {

  // static propTypes = {
  //   products: PropTypes.shape({
  //     rows: PropTypes.array.isRequired,
  //     size: PropTypes.int.isRequired,
  //   }),
  // }

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
        <Filter />
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

export default connect(
  ({ products }) => ({ products })
)(Products);
