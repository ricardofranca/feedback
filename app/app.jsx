/* Precisamos do polyfill no navegador para TODO */
import 'babel-polyfill';
/* Biblioteca do React utilizada para colar a árvore no HTML */
import ReactDOM from 'react-dom';
/* Ferramenta de D'us */
import React from 'react';
/* API para permitir o React ter urls amigáveis
    com history API nativa do navegador
 */
 import Base from './base.jsx';

 import FeedbackForm from './components/feedback/FeedbackForm.jsx';

import { IndexRedirect, Router, Route, browserHistory } from 'react-router';
/* Biblioteca FLUX para geranciar os dados */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
/* cola com react */
import { Provider } from 'react-redux';
/* cola entre os tres */
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';

/* Middleware para gerenciar o redux de forma assincrona */
import createSagaMiddleware from 'redux-saga';

import ApiReducers from './api/reducers';

import Sagas from 'api/sagas';
/* ************************************************************************** */
/* NOSSO CODIGO */
/* Nossa API com actions, reducers e sagas */
//import api from 'api';
import FeedbackReview from './components/FeedbackReview.jsx'

import firebase from 'firebase';
window.firebase = firebase;
var config = {
  apiKey: "AIzaSyAwFULDzJxhy67MYf5tMTMD3ygQh2pZGks",
  authDomain: "biohacking-ca69d.firebaseapp.com",
  databaseURL: "https://biohacking-ca69d.firebaseio.com",
  storageBucket: "biohacking-ca69d.appspot.com",
  messagingSenderId: "730944460815"
};
window.firebase.initializeApp(config);

const Invites = () => {
  return <div>Invites</div>;
}

function Root() {
  /* Criamos o Middleware que será o responsável em ficar observando o dispatch
    das actions e gerenciando as requisições assíncronas principalmente
   */
  const sagaMiddleware = createSagaMiddleware();
  /* Comina os reducers de terceiros e os nossos */
  const reducers = combineReducers({
    routing: routerReducer,
    ...ApiReducers,
  });

  const middlewares = [
    routerMiddleware(browserHistory),
    sagaMiddleware,
  ];
  /* Cria o Store que gerenciarar os dados compartilhados da APP inteira */
  const store = createStore(
    reducers,
    compose(
      applyMiddleware(...middlewares)
    )
  );
  /* Applica o Middleware pra carregar os "observers" das sagas */
  sagaMiddleware.run(Sagas);

  /* Pra se integrar com a extensão redux do Chrome */
  if (window.devToolsExtension) window.devToolsExtension.updateStore(store);

  /* Nossa API offline vai ficar escutando e atualiza o cache no início da app */
  // const offline = new OfflineWorker(store);
  // store.subscribe(offline.register.bind(offline));
  /* Linkamos o state do Store com o state do history, agora os componentes
    gerenciados pelos dois recebem os dados da route/url nos props
   */
  const history = syncHistoryWithStore(browserHistory, store);
  /* Monta a árvore de Virtual DOM da aplicação */
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={Base} >
          <IndexRedirect to="/feedbacks/new" />
          <Route path="/feedbacks/new" component={FeedbackForm} />
          <Route path="/invites" component={Invites}>
            <Route path="/invites/:id" component={Invites} />
          </Route>
        </Route>
      </Router>
    </Provider>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));
