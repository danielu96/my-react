import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductListPage from '../Pages/ProductListPage';
import ProductPage from '../Pages/ProductPage';
import ContactPage from '../Pages/ContactPage';
import HomePage from '../Pages/HomePage';
import AdminPage from '../Pages/AdminPage';


const Page = () => {
  return (
    <>
   
   <Routes>
      
        <Route path="/" element={<HomePage/>} />
        <Route path="/products" element={<ProductListPage/>} />
        <Route path="/product/:id" element={<ProductPage/>} />
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/admin" element={<AdminPage/>} />
        </Routes>
        
    </>
  );
}

export default Page;