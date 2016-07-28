import React from 'react';
import { connect } from 'react-redux';
import Feedback from './feedback';
import { FEEDBACK_LIST_REQUEST } from '../api';

@connect( (state) => ({
  feedbacks: state.feedbacks
}) )
export default class Feedbacks extends React.Component {

  componentDidMount() {
    const {dispatch} = this.props;

    dispatch(function(next, getState){

      const state = getState();

      next({
        dispatch: next,
        type: FEEDBACK_LIST_REQUEST,
        payload: state
      });

      return state;
    });

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
