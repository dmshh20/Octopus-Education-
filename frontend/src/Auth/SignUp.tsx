import React, { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Sign.css'

const SignUp = () => {
  const navigate = useNavigate()
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    firstName: '',
    secondName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): any => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

   const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
          const request = await axios.post(
          process.env.REACT_APP_BACKEND_SIGNUP as string
          , {
            firstName: formData.firstName,
            secondName: formData.secondName,
            email: formData.email,    
            password: formData.password,
            confirmPassword: formData.confirmPassword
          }, {
            headers: {'Content-Type': 'application/json'},

          })

          const emailRegex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/
          if (!emailRegex.test(formData.email)) {
            setError('Email is not valid')
          }

          if (formData.password !== formData.confirmPassword) {
            setError('Passwords dont match')
          }

        if (request.status === 201) {
          navigate('/')
        } else {
          throw new Error("Invalid Credentials")
        }
    } catch(error) {
      throw error
    }


  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>

        {error && <h2 className='error-message'>{error}</h2>}

        <div className="form-group">
          <input 
            type="text" 
            name="firstName" 
            value={formData.firstName} 
            onChange={handleChange} 
            required 
          />
          <label>firstName</label>
        </div>

         <div className="form-group">
          <input 
            type="text" 
            name="secondName" 
            value={formData.secondName} 
            onChange={handleChange} 
            required 
          />
          <label>secondName</label>
        </div>

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

        <div className="form-group">
          <input 
            type="password" 
            name="confirmPassword" 
            value={formData.confirmPassword} 
            onChange={handleChange} 
            required 
          />
          <label>Confirm Password</label>
        </div>

        <button type="submit" className='signing-btn'>Sign Up</button>
        <Link to={'/signin'} className='existingAccount'>Haven't an account yet?</Link>

      </form>
    </div>
  );
};

export default SignUp;
