import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Vendor from './pages/Vendor';
import Vendors from './pages/vendors';
import createVendor from './pages/createVendor';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SignUp />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/vendors' element={<Vendors />} />
      <Route path='/create-vendor' element={<createVendor />} />
      <Route path='/vendor/:vendorId' element={<Vendor />} /> 
    </Routes>
    </BrowserRouter>
  )
}

export default App