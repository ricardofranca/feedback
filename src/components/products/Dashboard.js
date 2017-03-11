import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ReactDataGrid from 'react-data-grid';
import Filter from 'components/milform';

class Dashboard extends React.Component {

  getRows = (index) => {
    const { products } = this.props;
    return products.rows[index];
  }

  render() {
    const { products, entity } = this.props;

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
      {
        key: 'Edit',
        name: 'Edit'
      },
    ];

    return (
      <div>
        <Filter entity={entity} />
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

export default connect(({ products }) => ({ products}))(Dashboard);
