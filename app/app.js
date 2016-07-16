import ReactDOM from 'react-dom';
import React from 'react';
import Invites from './invites/list';

class App extends React.Component {

  render() {

    const invites = [{
      id: 23,
      name: 'Chico',
      url: 'https://pbs.twimg.com/profile_images/85884918/barroso_200x200.JPG'
    },{
      id: 30,
      name: 'renoir'
    }]

    return(
      <div className="mdl-layout mdl-js-layout">
        <main className="mdl-layout__content">
          <Invites invites={invites} />
        </main>
      </div>
    )
  }

}

ReactDOM.render(<App  />, document.getElementById('app'));
