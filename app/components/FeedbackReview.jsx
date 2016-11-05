import React, { PropTypes } from 'react'
import FeedbackHeader from './FeedbackHeader.jsx'
import KeysList from './KeysList.jsx'

class FeedbackReview extends React.Component {
  render () {
    return (
      <div className="mdl-card mdl-shadow--2dp">
        <div className="mdl-card__title">
          <FeedbackHeader/>
        </div>
        <div className="mdl-card__supporting-text">
          <KeysList/>
        </div>
      </div>
    )
  }
}

export default FeedbackReview;
