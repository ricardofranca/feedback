import React from 'react';
import fetch from 'isomorphic-fetch';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import CircularProgress from 'material-ui/CircularProgress';
import { blue500 } from 'material-ui/styles/colors';
import FeedbackCard from 'components/feedbacks/feedbackcard.jsx';

export default class Form extends React.Component {

  state = {
    id: null,
    start: null,
    finish: null,
    description: '',
  };

  componentDidMount() {
    this.save();
  }

  async save(method, body) {
    try {
      const response = await fetch('/feedbacks.json', this.createConfig(method, body));
      const feedback = await response.json();
      this.setState(feedback);
    } catch (e) {
      console.log('Booo', e);
    }
  }

  createConfig = (method = 'POST', body = '') => ({
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method,
    body,
  })

  handleCreate = () => {
    // const { dispatch } = this.props;
    // const type = FEEDBACKS.SAVE;
    this.save('PUT', JSON.stringify(this.state));
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
      const actions = [
        <FlatButton
          label="Submit"
          primary={bool}
          onTouchTap={this.handleCreate}
        />,
      ];
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
