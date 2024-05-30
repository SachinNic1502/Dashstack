import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const validateForm = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = 'Email is required';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log('Form submitted');
    }
  };
  return (
    <section className="bg-[#568AFF] h-screen flex items-center justify-center">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 w-[500px]">
        <div className="mx-auto max-w-screen-sm text-center bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl text-[#202224] font-bold mb-6 text-center">Login to Account</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-[#202224] mb-2 text-left">Email address:</label>
            <input
              type="email"
              id="email"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-blue-600`}
              placeholder="demo@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1 text-left">{errors.email}</p>}
          </div>
          
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="password" className="text-[#202224] text-left">Password</label>
              <Link to="/forgot-password" className="text-sm text-[#202224] hover:underline">Forgot password?</Link>
            </div>
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.password ? 'border-red-500' : 'border-gray-300'} focus:ring-blue-600`}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-2 top-2 text-gray-700"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-sm mt-1 text-left">{errors.password}</p>}
          </div>
          
          <div className="mb-4 flex items-center">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember" className="text-gray-700">Remember me</label>
          </div>
          
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">
            Sign In
          </button>
        </form>
        
        <div className="mt-4 text-center">
          <span className="text-gray-700">Don’t have an account? </span>
          <Link to="/create-account" className="text-blue-600 hover:underline">Create account</Link>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
