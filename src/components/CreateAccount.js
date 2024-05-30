import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CreateAccount = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
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
    if (!username) {
      newErrors.username = 'Username is required';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    }
    if (!acceptTerms) {
      newErrors.acceptTerms = 'You must accept the terms and conditions';
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
          <h1 className="text-2xl text-[#202224] font-bold mb-2 text-center">Create an Account</h1>
          <h3 className='text-sm mb-6'>Create a account to continue</h3>

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
              <label htmlFor="username" className="block text-[#202224] mb-2 text-left">Username:</label>
              <input
                type="text"
                id="username"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.username ? 'border-red-500' : 'border-gray-300'} focus:ring-blue-600`}
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {errors.username && <p className="text-red-500 text-sm mt-1 text-left">{errors.username}</p>}
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="password" className="text-[#202224] text-left">Password</label>
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
              <input
                type="checkbox"
                id="acceptTerms"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="mr-2"
              />
              <label htmlFor="acceptTerms" className="text-gray-700">I accept the terms and conditions</label>
            </div>
            {errors.acceptTerms && <p className="text-red-500 text-sm mt-1 text-left">{errors.acceptTerms}</p>}

            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">
              Create Account
            </button>
          </form>

          <div className="mt-4 text-center">
            <span className="text-gray-700">Already have an account? </span>
            <Link to="/login" className="text-blue-600 hover:underline">Sign in</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateAccount;
