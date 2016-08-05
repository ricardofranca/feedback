import React from 'react';
import TextField from 'material-ui/TextField';

class Question extends React.Component {

  createField = index => {
    const name = `${this.props.name}${index}`;

    return (<TextField
      key={name}
      fullWidth
      multiLine
      rows={2}
      defaultValue={this.props.invite[name]}
      onChange={this.props.onChange}
      name={name}
    />);
  }

  render() {
    const className = `invite-${this.props.name}`;
    const iconClassName = this.props.iconClassName;
    const fields = [1, 2, 3].map(this.createField, this);

    return (
      <div className="mdl-cell mdl-cell--6-col">
        <div className={className}>
          <i className={iconClassName} aria-hidden="true" />
        </div>
        <form action="#">{fields}</form>
      </div>
    );
  }

}

Question.propTypes = {
  name: React.PropTypes.string,
  iconClassName: React.PropTypes.string,
  invite: React.PropTypes.object,
  onChange: React.PropTypes.any,
};

export default Question;
