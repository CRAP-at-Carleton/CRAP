import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import Home from './components/homepage/Home';
import rootReducer from './reducers';
import logger from './middleware/logger';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
