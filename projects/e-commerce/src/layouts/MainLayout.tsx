import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer className="border-t-2 mt-20 border-slate-100 h-24 flex justify-center items-center"/>
    </>
  );
}
