import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      start: null,
      finish: null,
      description: ''
    }
  }

  changeValue = (event, date) => {
    this.setState({
      start: date,
    });
  }

  handleClose = () => {
    const { dispatch, actions } = this.props;
    const type = actions.NEW;
    const payload = false;
    dispatch({type, payload});
  }

  handleCreate = () => {
    const { dispatch, actions } = this.props;
    const type = actions.CREATE;
    const payload = this.state;
    dispatch({type, payload});
  }

  render() {
    const actions = [
       <FlatButton
         label="Cancel"
         primary={true}
         onTouchTap={this.handleClose}
       />,
       <FlatButton
         label="Submit"
         primary={true}
         onTouchTap={this.handleCreate}
       />,
     ];
    return(
      <Dialog
          title="Create New Feedback Round"
          actions={actions}
          modal={true}
          open={this.props.openNewFeedback}
        >
        <TextField
          hintText="Description"
          multiLine={true}
          rows={2}
          rowsMax={4}
        />
        <DatePicker
          onChange={this.changeValue}
          floatingLabelText="Start"
          autoOk={true}
        />
        <DatePicker
          floatingLabelText="Finish"
          autoOk={true}
        />
      </Dialog>
    );
  }

}

Form.propTypes = {
  openNewFeedback: React.PropTypes.bool,
};

export default Form;