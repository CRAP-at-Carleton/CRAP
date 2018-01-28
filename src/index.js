import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import Home from './components/homepage/Home';
import Browse from './components/browse/Browse';
import Saved from './components/saved/Saved';
import rootReducer from './reducers';
import logger from './middleware/logger';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/browse' component={Browse} />
        <Route path='/saved' component={Saved} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
