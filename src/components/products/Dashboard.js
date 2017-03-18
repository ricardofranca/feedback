import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import ReactDataGrid from 'react-data-grid';
import Filter from 'components/milform';

class Dashboard extends React.Component {

  getRows = (index) => {
    const { products } = this.props;
    return products.rows[index];
  }

  onRowSelect = (rows) => {
    this.props.dispatch(push(`/products/edit/34`));
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
        <Filter mode="filter" entity={entity} />
        <div className="Grid">
          <ReactDataGrid
            enableCellSelect={true}
            enableRowSelect={true}
            onRowSelect={this.onRowSelect}
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
