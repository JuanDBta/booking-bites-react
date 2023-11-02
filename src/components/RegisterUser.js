import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../redux/features/users/usersSlice';
import '../styles/Login.module.css';

const RegisterUser = () => {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const dispatch = useDispatch();
  const loginError = useSelector((state) => state.users.loginError);
  const error = useSelector((state) => state.users.error);
  const navigate = useNavigate();
  const handleSubmit = () => {
    const data = {
      name,
      username: userName,
    };
    dispatch(createUser(data));
    navigate('/login');
  };
  return (
    <form action="log-in" method="post" className="form-container">
      <div className="login-container">
        <label htmlFor="registerName" className="label-text">Name</label>
        <input
          className="username-field"
          type="text"
          name="registerName"
          id="registerName"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="registerUserName" id="registerUserName" className="label-text">Username</label>
        <input
          className="username-field"
          type="text"
          name="registerUserName"
          id="registerUserName"
          placeholder="Enter your username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        {loginError && error && <p className="error-message">{error}</p>}
        <button type="button" className="login-button" onClick={handleSubmit}>Sign In</button>
      </div>
    </form>
  );
};

export default RegisterUser;
