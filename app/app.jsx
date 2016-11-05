/* Precisamos do polyfill no navegador para TODO */
import 'babel-polyfill';
/* Biblioteca do React utilizada para colar a árvore no HTML */
import ReactDOM from 'react-dom';
/* Ferramenta de D'us */
import React from 'react';
/* API para permitir o React ter urls amigáveis
    com history API nativa do navegador
 */
import { IndexRedirect, Router, Route, browserHistory } from 'react-router';
/* Biblioteca FLUX para geranciar os dados */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
/* cola com react */
import { Provider } from 'react-redux';
/* cola entre os tres */
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

/* Middleware para gerenciar o redux de forma assincrona */
import createSagaMiddleware from 'redux-saga';
/* Biblioteca necessária para habilitar os events mobile da material-ui */
import injectTapEventPlugin from 'react-tap-event-plugin';
/* ************************************************************************** */
/* NOSSO CODIGO */
/* Nossa API com actions, reducers e sagas */
//import api from 'api';

const api = {
  reducers: {
    invites: (state = []) => state,
  },
};

/* Componentes iniciais e das rotas */
//import Base from 'components/base.jsx';
// import Invites from 'components/invites/invites.jsx';
// import FeedbacksForm from 'components/feedbacks/form.jsx'
/* Nossa API que vai gerenciar quando a app estiver offline */
// import OfflineWorker from 'offline';
/* Executamos no início para habilitar pro sistema inteiro */
injectTapEventPlugin();

const Invites = () => {
  return <div>Invites</div>;
}

const FeedbacksForm = () => {
  return <div>FeedbacksForm</div>;
}

const Base = (props) => {
  return <div>
    {props.children}
  </div>
}


function Root() {
  /* Criamos o Middleware que será o responsável em ficar observando o dispatch
    das actions e gerenciando as requisições assíncronas principalmente
   */
  const sagaMiddleware = createSagaMiddleware();
  /* Comina os reducers de terceiros e os nossos */
  const reducers = combineReducers({
    routing: routerReducer,
    ...api.reducers
  });
  /* Cria o Store que gerenciarar os dados compartilhados da APP inteira */
  const store = createStore(
    reducers,
    compose(
      //applyMiddleware(sagaMiddleware),
      /* Pra se integrar com a extensão redux do Chrome */
       window.devToolsExtension && window.devToolsExtension()
    )
  );
  /* Applica o Middleware pra carregar os "observers" das sagas */
  //sagaMiddleware.run(api.sagas);

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
          <Route path="/feedbacks/new" component={FeedbacksForm} />
          <Route path="/invites" component={Invites}>
            <Route path="/invites/:id" component={Invites} />
          </Route>
        </Route>
      </Router>
    </Provider>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));
