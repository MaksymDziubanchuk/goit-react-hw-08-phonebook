import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
import { autoLoginAction } from './redux/authSlice';
import './styles.css';
import './index.css';

store.dispatch(autoLoginAction());

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter
      // basename="/goit-react-hw-08-phonebook/"
      >
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
