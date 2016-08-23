import React from 'react';
import { connect } from 'react-redux';
import fetch from 'isomorphic-fetch';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import CircularProgress from 'material-ui/CircularProgress';
import { blue500 } from 'material-ui/styles/colors';
import FeedbackCard from 'components/feedbacks/feedbackcard.jsx';
import { FEEDBACKS, INVITES, actionCreate} from 'api/actions';

@connect(state => ({
  invite: state.invite,
}))
export default class Form extends React.Component {

  state = {
    id: null,
    start: null,
    finish: null,
    description: '',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actionCreate(FEEDBACKS));
  }

  handleCreate = () => {
    // const { dispatch } = this.props;
    // const type = FEEDBACKS.SAVE;
    // this.save('PUT', JSON.stringify(this.state));
    // dispatch({ type, payload });
  }

  changeText = (event, description) => {
    this.setState({ description });
  }

  changeStartDate = (event, start) => {
    this.setState({ start });
  }

  changeFinishDate = (event, finish) => {
    this.setState({ finish });
  }

  createFeedback = (feedback) => {
    if (this.state.id) {
      const bool = true;
      return  <FeedbackCard feedback={feedback}>
                <TextField
                  onChange={this.changeText}
                  value={this.state.description}
                  name="description"
                  hintText="Description"
                  multiLine={bool}
                  rows={2}
                  rowsMax={4}
                />
                <DatePicker
                  onChange={this.changeStartDate}
                  value={this.state.start}
                  name="start"
                  container="inline"
                  floatingLabelText="Start"
                  autoOk={bool}
                />
                <DatePicker
                  onChange={this.changeFinishDate}
                  value={this.state.finish}
                  name="finish"
                  container="inline"
                  floatingLabelText="Finish"
                  autoOk={bool}
                />
              </FeedbackCard>;
    }
    return "";
  }

  render() {
    const progressStyle = {
      display: (this.state.id) ? 'none' : 'inline-block',
    };
    const feedbackCard = this.createFeedback();
    return (
      <div className="feedbacks">
        <CircularProgress
          size={2}
          color={blue500}
          style={progressStyle}
        />
        {feedbackCard}
      </div>
    );
  }

}
