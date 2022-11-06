import React from "react";
import appStyle from "./App.module.css";

import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Layout from "./components/layouts/Layout";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";

function App() {
  return (
    <div className={appStyle.app}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
