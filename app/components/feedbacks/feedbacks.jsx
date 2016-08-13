import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import { FEEDBACKS } from 'api/actions';
import Feedback from './feedback.jsx';

@connect((state) => ({
  feedbacks: state.feedbacks,
  openNewFeedback: state.openNewFeedback,
}))
class Feedbacks extends React.Component {

  componentDidMount() {
    let id = null;
    if (this.props.params) {
      id = this.props.params.id;
    }
    this.props.dispatch({
      type: FEEDBACKS.REQUEST,
      payload: { id },
    });
  }

  handleClose = () => {

  }

  mapFeedbacks = feedback => <Feedback key={`invite-${feedback.id}`} feedback={feedback} />

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
         disabled={true}
         onTouchTap={this.handleClose}
       />,
     ];
    const list = this.props.feedbacks.map(this.mapFeedbacks);
    return (
      <div className="feedbacks">
        {list}
        <Dialog
            title="Dialog With Actions"
            actions={actions}
            modal={true}
            open={this.props.openNewFeedback}
          >
          Only actions can close this dialog.
        </Dialog>
      </div>
    );
  }

}

Feedbacks.propTypes = {
  params: React.PropTypes.any,
  dispatch: React.PropTypes.func,
  feedbacks: React.PropTypes.any,
};

export default Feedbacks;
