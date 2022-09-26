import React, { Fragment } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './global';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Fragment>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Fragment>
  </React.StrictMode>
);
