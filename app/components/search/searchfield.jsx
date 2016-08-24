import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import IconButton from 'material-ui/IconButton';

export default class SearchField extends React.Component {

  state = {
    dataSource: [],
  }

  async request(text) {
    const config = {
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
    try {
      const response = await fetch(`/search?${text}`, config);
      const dataSource = await response.json();
      debugger;
      this.setState({dataSource});
    } catch (e) {
      console.log('Booo', e);
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    return false;
  }

  onUpdate = text => {
    this.request(text);
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
