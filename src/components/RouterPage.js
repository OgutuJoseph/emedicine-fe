import  React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Login';
import Registration from './Registration'
import Cart from './users/Cart';
import Dashboard from './users/Dashboard';
import Header from './users/Header';
import MedicineDisplay from './users/MedicineDisplay';
import Orders from './users/Orders';
import Profile from './users/Profile';
import AdminDasboard from './admin/AdminDashboard';
import AdminHeader from './admin/AdminHeader';
import AdminOrders from './admin/AdminOrders';
import CustomerList from './admin/CustomerList';
import Medicine from './admin/Medicine';

export default function RouterPage(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/registration' element={<Registration />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/products' element={<MedicineDisplay />} />
                <Route path='/orders' element={<Orders />} />
                <Route path='/profile' element={<Profile />} />
                
                <Route path='/admin/dashboard' element={<AdminDasboard />} />
                <Route path='/admin/orders' element={<AdminOrders />} />
                <Route path='/admin/customers' element={<CustomerList />} />
                <Route path='admin/medicine' element={<Medicine />} />
            </Routes>
        </Router>
    )
};