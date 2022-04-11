import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import ShopProvider from './context/ShopProvider';
ReactDOM.render(
  <React.StrictMode>
    {/** el componente App, va dentro del ShopProvider. App representa Children */}
    <ShopProvider>
      <App />
    </ShopProvider>
  </React.StrictMode>,
  document.getElementById('root')
);