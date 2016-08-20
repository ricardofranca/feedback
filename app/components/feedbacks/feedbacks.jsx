import React from 'react';

import { connect } from 'react-redux';
import { FEEDBACKS } from 'api/actions';
import Feedback from './feedback.jsx';

@connect((state) => ({
  feedbacks: state.feedbacks,
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

  mapFeedbacks = feedback => <Feedback key={`feedback-${feedback.id}`} feedback={feedback} />

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
  params: React.PropTypes.any,
  dispatch: React.PropTypes.func,
  feedbacks: React.PropTypes.any,
};

export default Feedbacks;
