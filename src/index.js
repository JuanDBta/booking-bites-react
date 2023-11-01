import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route
          path="/*"
          element={(
            <>
              <App />
            </>
          )}
        />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
