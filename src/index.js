import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/bulma.sass'
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Stores from './stores/Stores';
import { Provider } from 'mobx-react';
ReactDOM.render(
  <Provider stores={new Stores()}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
