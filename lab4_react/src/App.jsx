import React, { Suspense, lazy, useState } from "react";
import { LangContext } from "./context/Lang.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Cart = lazy(() => import("./pages/cart_page.jsx"));
const P_details = lazy(() => import("./pages/p_details_page.jsx"));
const ProductList = lazy(() => import("./pages/productlist.jsx"));
const Register = lazy(() => import("./pages/Register.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));
const LayoutWithHeader = lazy(() => import("./comps/LayoutWithHeader.jsx"));
function App() {
  const [lang, setLang] = useState("English");
  return (
        <LangContext.Provider value={{ lang, setLang }}> 
    <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
  <Routes>
    <Route element={<LayoutWithHeader />}>
      <Route path="/" element={<ProductList />} />
      <Route path="/p_details/:id" element={<P_details />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<Cart />} />
    </Route>
    <Route path="*" element={<NotFound />} />
 </Routes > 
 </Suspense>
 </BrowserRouter>
 </LangContext.Provider>
 );
}

export default App
