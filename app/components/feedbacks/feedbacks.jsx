import React from 'react';
import { connect } from 'react-redux';
import { FEEDBACKS } from 'api/actions';
import Feedback from './feedback.jsx';

@connect((state) => ({
  feedbacks: state.feedbacks,
}))
class Feedbacks extends React.Component {

  componentDidMount() {
    this.props.dispatch({ type: FEEDBACKS.REQUEST });
  }

  mapFeedbacks = feedback => <Feedback key={`invite-${feedback.id}`} feedback={feedback} />

  render() {
    const list = this.props.feedbacks.map(this.mapFeedbacks);
    return (
      <div className="feedbacks">
          {list}
      </div>
    );
  }

}

Feedbacks.propTypes = {
  dispatch: React.PropTypes.element,
  feedbacks: React.PropTypes.any,
};

export default Feedbacks;
