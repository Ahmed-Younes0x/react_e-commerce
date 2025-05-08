import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";

export default function LayoutWithHeader() {
  return (
    <>
      <Header />
      <div className="container my-5">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
