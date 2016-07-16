import ReactDOM from 'react-dom';
import React from 'react';
<<<<<<< HEAD
=======
import Feedbacks from './feedbacks/list';
import avro from 'avsc';

window.avro = avro;
window.Buffer = Buffer;
>>>>>>> b748e3d... Modificações de prototipação

class App extends React.Component {

  render() {
    return(
      <div>
        Olá
      </div>
    )
  }

}

ReactDOM.render(<App  />, document.getElementById('app'));
