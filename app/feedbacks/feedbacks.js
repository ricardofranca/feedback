import React from 'react';
import { connect } from 'react-redux';
import Feedback from './feedback';

@connect( (state) => ({
  rest: state.rest,
  feedbacks: state.feedbacks
}) )
export default class Feedbacks extends React.Component {

  componentDidMount() {
    const {dispatch, rest} = this.props;
    dispatch(rest.actions.feedbacks.sync());
  }

  mapFeedbacks = feedback => {
    return <Feedback key={`invite-${feedback.id}`} feedback={feedback} />
  }

  render() {

    const list = this.props.feedbacks.data.map(this.mapFeedbacks);

    return(
        <div className="feedbacks">
            {list}
        </div>
    )
  }

}
