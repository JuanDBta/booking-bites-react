import React from 'react';
import { createRoot } from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App, SplashPage } from './App';
import Login from './components/Login';
import RegisterUser from './components/RegisterUser';
import store from './redux/store';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
);
