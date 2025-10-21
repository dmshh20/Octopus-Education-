import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Sign.css'

const SignUp = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: '',
    secondName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: any): any => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

   const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log('DATA:: ',formData);
    const request = await axios.post('http://localhost:3000/auth/signup', {
        firstName: formData.firstName,
        secondName: formData.secondName,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword
      }, {
        headers: {'Content-Type': 'application/json'},

      })

    if (request) {
      navigate('/')
    } else {
      throw new Error("Invalid Credentials")
    }


  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>

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

        <button type="submit">Sign Up</button>
        <Link to={'/signin'} className='existingAccount'>Haven't an account yet?</Link>

      </form>
    </div>
  );
};

export default SignUp;
