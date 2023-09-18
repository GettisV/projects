import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Men from "./components/Men";
import Product from "./components/Product";
import { MainContext } from "./Context/MainContext";
import Women from "./components/Women";
import About from "./components/About";
import Contacts from "./components/Contacts";

function App() {
  const [stateBtnAddToCart, setStateBtnAddToCart] = useState([
    { idProduct: undefined, count: undefined },
  ]);
  const [clickCart, setClickCart] = useState(false);

  return (
    <MainContext.Provider
      value={{
        stateBtnAddToCart,
        setStateBtnAddToCart,
        clickCart,
        setClickCart,
      }}
    >
      <BrowserRouter>
        <div className="App container mx-auto px-16">
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path="/" element={<Navigate to="/men" />} />
              <Route path="/men" element={<Men />} />
              <Route path="/men/:slug" element={<Product />} />
              <Route path="/women" element={<Women />} />
              <Route path="/women/:slug" element={<Product />} />
              <Route path="/about" element={<About />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="*" element={<Navigate to="/men" />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </MainContext.Provider>
  );
}

export default App;
