// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthenticatedLayout from './components/AuthenticatedLayout';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';
import Login from './components/Login';
import Register from './components/Register';
import NotFound from './components/NotFound';
import Product from './components/Product';
import Favorite from './components/Favorite';
import ProductStock from './components/ProductStock';
import Pricing from './components/Pricing';
import Calendar from './components/Calendar';
import Invoice from './components/Invoice';
import OrderList from './components/OrderList';
import CreateAccount from './components/CreateAccount';
import User from './components/User';

function App() {
  return (
    <Router>
      <Routes>
        {/* Authentication Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create-account" element={<CreateAccount/>}/>
        
        {/* Authenticated Routes */}
        <Route path="/" element={<AuthenticatedLayout><Dashboard /></AuthenticatedLayout>} />
        <Route path="/settings" element={<AuthenticatedLayout><Settings /></AuthenticatedLayout>} />
        <Route path="/product" element={<AuthenticatedLayout><Product /></AuthenticatedLayout>} />
        <Route path="/favorite" element={<AuthenticatedLayout><Favorite /></AuthenticatedLayout>} />
        <Route path="/order-list" element={<AuthenticatedLayout><OrderList /></AuthenticatedLayout>} />
        <Route path="/product-stock" element={<AuthenticatedLayout><ProductStock /></AuthenticatedLayout>} />
        <Route path="/user" element={<AuthenticatedLayout><User /></AuthenticatedLayout>} />
        <Route path="/pricing" element={<AuthenticatedLayout><Pricing /></AuthenticatedLayout>} />
        <Route path="/calendar" element={<AuthenticatedLayout><Calendar /></AuthenticatedLayout>} />
        <Route path="/invoice" element={<AuthenticatedLayout><Invoice /></AuthenticatedLayout>} />
        
        {/* Catch-all route for 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
