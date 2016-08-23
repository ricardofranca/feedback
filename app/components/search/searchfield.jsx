import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import IconButton from 'material-ui/IconButton';

export default class SearchField extends React.Component {

  state = {
    dataSource: [],
  }

  onSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    return false;
  }

  onUpdate = (value) => {
    console.log(value);
    const { dataSource } = this.state;
    dataSource.push(value);
    this.setState({ dataSource });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <IconButton
          iconClassName="fa fa-search"
        />
        <AutoComplete
          className="glenio"
          disableFocusRipple={false}
          dataSource={this.state.dataSource}
          onUpdateInput={this.onUpdate}
        />
      </form>
    );
  }
}
