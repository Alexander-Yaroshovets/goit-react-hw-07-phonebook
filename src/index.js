import React from 'react';

import { Provider } from 'react-redux';

import ReactDOM from 'react-dom/client';

import store from './redux';

import { App } from 'components/App';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
