import React from 'react';
import TextField from 'material-ui/TextField';
import Header from './header';

export default class Invite extends React.Component {

  state = { invite: {} }

  constructor(props) {
    super(props);

    if(this.props.invite) {
      this.state.invite = this.props.invite;
    }

  }

  componentDidMount() {
    if(!this.props.invite) {
      fetch(`/invites/${this.props.params.id}.json`).then(
        res => res.json().then( this.refresh )
      );
    }

  }

  refresh = item => {
    this.setState({invite: item});
  }

  render() {

    const invite = this.state.invite;
    const name = (invite)? invite.name: '';
    const {url} = invite;

    return(
        <div className="invite">

          <Header avatar_url={url} name={name} />

          <div className="mdl-grid invite-grid">

          <div className="mdl-cell mdl-cell--6-col">

          <div className="invite-negative">
            <i className="fa fa-meh-o" aria-hidden="true"></i>
          </div>

          <form action="#">
          <TextField
            multiLine={true}
            rows={2}
            rowsMax={4}
            name="negative1"
          />
          <TextField
            multiLine={true}
            rows={2}
            rowsMax={4}
            name="negative2"
          />
          <TextField
            multiLine={true}
            rows={2}
            rowsMax={4}
            name="negative3"
          />

          </form>

          </div>

            <div className="mdl-cell mdl-cell--6-col">

            <div className="invite-positive">
              <i className="fa fa-smile-o" aria-hidden="true"></i>
            </div>

            <form action="#">
            <TextField
              multiLine={true}
              rows={2}
              rowsMax={4}
              name="positive1"
            />
            <TextField
              multiLine={true}
              rows={2}
              rowsMax={4}
              name="positive2"
            />
            <TextField
              multiLine={true}
              rows={2}
              rowsMax={4}
              name="positive3"
            />
            </form>

            </div>

          </div>

        </div>
    )
  }

}
