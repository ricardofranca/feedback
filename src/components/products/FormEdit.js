import React, { PropTypes } from 'react';
import Form from 'components/milform';

class FormEdit extends React.Component {
  render() {
    const { entityId, entity, mode } = this.props;
    return (
      <div>
        <Form
          entityId={entityId}
          entity={entity}
          mode={mode}
        />
      </div>
    );
  }
}

export default FormEdit;
