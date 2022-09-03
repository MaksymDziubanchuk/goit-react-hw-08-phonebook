import { useState } from 'react';
import PropTypes from 'prop-types';

export const RegisterForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const setterMap = {
    name: setName,
    email: setEmail,
    password: setPassword
  }

  const handleChange = (e, ) => {
    const { name, value } = e.currentTarget;
    setterMap[name](value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({email, password, name});
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="register-name">
        <p className="input__title">Name</p>
        <input
          className="input"
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          id="register-name"
          required
        />
      </label>
      <label htmlFor="register-email">
        <p className="input__title">Email</p>
        <input
          className="input"
          value={email}
          onChange={handleChange}
          type="email"
          name="email"
          id="register-email"
          required
        />
      </label>
      <label htmlFor="register-password">
        <p className="input__title">Password</p>
        <input
          className="input"
          value={password}
          onChange={handleChange}
          type="password"
          name="password"
          id="register-password"
          required
        />
      </label>

      <button type="submit" className="btn">
        Register
      </button>
    </form>
  );
};

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
