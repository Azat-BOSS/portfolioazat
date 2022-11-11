import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import layoutStyle from "./layout.module.css"

const Layout = () => {
  return (
    <div className={layoutStyle.layout}>
      <Header/>
      <main className={layoutStyle.main}>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  );
}
 
export default Layout;