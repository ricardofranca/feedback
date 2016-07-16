import React from 'react';
import Inabilities from './inabilities.js';

export default class Survey extends React.Component {

  render() {

    return(
      <div className="mdl-card__supporting-text">
        <div className="mdl-grid">

          <div className="mdl-cell mdl-cell--6-col">

            <div className="mdl-grid feedbacks__feedback-survey">
              <div className="mdl-cell mdl-cell--12-col">
                <i className="fa fa-meh-o feedbacks__feedback-survey-meh" aria-hidden="true"></i>
              </div>
              <div className="mdl-cell mdl-cell--12-col">
                <Inabilities />
              </div>
            </div>

          </div>
          <div className="mdl-cell mdl-cell--6-col">

            <div className="mdl-grid feedbacks__feedback-survey">
              <div className="mdl-cell mdl-cell--12-col">
                <i className="fa fa-smile-o feedbacks__feedback-survey-smile" aria-hidden="true"></i>
              </div>
              <div className="mdl-cell mdl-cell--12-col">
                <Inabilities />
              </div>
            </div>

          </div>

        </div>
      </div>
    )
  }

}
