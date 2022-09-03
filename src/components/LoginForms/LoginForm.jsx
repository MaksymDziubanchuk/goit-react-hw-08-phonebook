import { useState } from 'react';
import PropTypes from 'prop-types';

export const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const setterMap = {
    email: setEmail,
    password: setPassword
  }

  const handleChange = (e, ) => {
    const { name, value } = e.currentTarget;
    setterMap[name](value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({email, password});
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="login-email">
        <p className="input__title">Email</p>
        <input
          className="input"
          value={email}
          onChange={handleChange}
          type="email"
          name="email"
          id="login-email"
          required
        />
      </label>
      <label htmlFor="login-password">
        <p className="input__title">Password</p>
        <input
          className="input"
          value={password}
          onChange={handleChange}
          type="password"
          name="password"
          id="login-password"
          required
        />
      </label>

      <button type="submit" className="btn">
        log in
      </button>
    </form>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
