import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Inviteds from './Inviteds.jsx';

class FeedbackForm extends React.Component {

	componentDidMount() {
		const { dispatch } = this.props;
		dispatch({
	    type: 'FEEDBACKS_CREATE',
	  });
	}

	render() {
    const { feedback: {
			owner : { photo, name },
			description,
			inviteds,
		  }  } = this.props;
		return (
      <div className="demo-card-wide mdl-card mdl-shadow--2dp">
        <img src={photo} height='100px' width='100px' />
        <div className="mdl-card__title">
          <h2 className="mdl-card__title-text">{name}</h2>
        </div>
        <form action="#">
           <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
             <input className="mdl-textfield__input" type="date" id="start" />
           </div>
         </form>
         <form action="#">
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input className="mdl-textfield__input" type="date" id="end" />
            </div>
          </form>
          <form action="#">
            <div className="mdl-textfield mdl-js-textfield">
              <textarea className="mdl-textfield__input" type="text" rows= "3" id="sample5" ></textarea>
              <label className="mdl-textfield__label" htmlFor="sample5">{description}</label>
            </div>
          </form>

       <form action="#">
          <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input className="mdl-textfield__input" type="text" id="search" />
            <label className="mdl-textfield__label" htmlFor="search">Busque seus amigos</label>
          </div>
        </form>
        <Inviteds inviteds={inviteds} />
      </div>
    );
	}
}

const mapPropsToState = (state) => {
	return {
    feedback: state.feedback,
  }
}

export default connect(mapPropsToState)(FeedbackForm);
