import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { RouterProvider } from 'react-router-dom';
import routes from './AppRoutes.jsx';
import { store } from './appStore.js';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider store={store} router={routes} />
  </Provider>,
);
