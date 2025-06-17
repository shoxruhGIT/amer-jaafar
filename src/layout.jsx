import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const Layout = () => {
  return (
    <main className="w-full h-auto bg-[#070809]">
      <Navbar />
      <section className="flex-1 mt-[120px] pb-20">
        <Outlet />
      </section>
      <Footer />
    </main>
  );
};

export default Layout;
