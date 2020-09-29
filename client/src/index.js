import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,} from "react-router-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "semantic-ui-css/semantic.min.css";
import AuthProvider from './providers/AuthProvider';

ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
