import React from "react";
import appStyle from "./App.module.css";

import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Layout from "./components/layouts/Layout";
import About from "./components/About/About";
import Zen from "./components/Home/Pages/Zen/Zen";
import Mesto from "./components/Home/Pages/Mesto/Mesto";
import Projito from "./components/Home/Pages/Projito/Projito"

function App() {
  return (
    <div className={appStyle.app}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/zen" element={<Zen />} />
          <Route path="/mesto" element={<Mesto />} />
          <Route path="/projito" element={<Projito />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
