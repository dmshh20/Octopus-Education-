import React, { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Sign.css';
import { useAuth } from './AuthContext';

const SignIn = () => {
  const navigate = useNavigate();
  const { login } = useAuth()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      const response = await axios.post(
      process.env.REACT_APP_BACKEND_SIGNIN as string
      ,
        {
          email: formData.email,
          password: formData.password,
        },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );

      // response.data will contain { message, access_token }
      const { access_token } = response.data;

      login(access_token)
      // Save token in localStorage
      localStorage.setItem('access_token', access_token);
      navigate('/');

    } catch (error: any) {
      console.error('Error signing in:', error);
      if (error.response?.data?.message) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('Something went wrong. Please try again.');
      }
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label>Email</label>
        </div>

        <div className="form-group">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <label>Password</label>
        </div>

        <button type="submit" className='signing-btn'>Sign In</button>

        <Link to="/signup" className="existingAccount">
          Haven't an account yet?
        </Link>
      </form>
    </div>
  );
};

export default SignIn;
