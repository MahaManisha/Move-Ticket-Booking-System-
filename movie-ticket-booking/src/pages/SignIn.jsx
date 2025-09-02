import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signin.css';

const Signin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loginMethod, setLoginMethod] = useState('email'); // 'email' or 'phone'

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign in submitted:', formData);
  };

  return (
    <div className="signin-page">
      <div className="signin-container">
        <div className="signin-header">
          <div className="login-icon">🎬</div>
          <h1>Welcome Back</h1>
          <p>Sign in to your account to book tickets</p>
        </div>

        <div className="login-method-selector">
          <button
            type="button"
            className={`method-btn ${loginMethod === 'email' ? 'active' : ''}`}
            onClick={() => setLoginMethod('email')}
          >
            📧 Email
          </button>
          <button
            type="button"
            className={`method-btn ${loginMethod === 'phone' ? 'active' : ''}`}
            onClick={() => setLoginMethod('phone')}
          >
            📱 Phone
          </button>
        </div>

        <form className="signin-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="loginInput">
              {loginMethod === 'email' ? 'Email Address' : 'Phone Number'}
            </label>
            <input
              type={loginMethod === 'email' ? 'email' : 'tel'}
              id="loginInput"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder={loginMethod === 'email' ? 'your@email.com' : '+91 98765 43210'}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
          </div>

          <div className="form-options">
            <label className="remember-label">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleInputChange}
              />
              Remember me
            </label>
            <Link to="/forgot-password" className="forgot-link">
              Forgot password?
            </Link>
          </div>

          <button type="submit" className="signin-btn">
            Sign In
          </button>

          <div className="divider">
            <span>Or continue with</span>
          </div>

          <div className="social-login">
            <button type="button" className="social-btn google-btn">
              🌐 Google
            </button>
            <button type="button" className="social-btn facebook-btn">
              📘 Facebook
            </button>
          </div>

          <div className="signup-link">
            Don't have an account? <Link to="/signup">Sign up now</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;