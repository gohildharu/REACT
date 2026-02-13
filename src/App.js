import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Main from "./Component/Main";
import Hero from "./Component/Hero";
import Navbar from "./Component/Nav";
import Special from "./Component/Special";
import Food from "./Component/Food";
import Food2 from "./Component/Food2";
import Destination from "./Component/Destination";
import Middle from "./Component/Middle";
import Footer from "./Component/Footer";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Home from "./Component/Home";
import ContactForm from "./Component/ContactForm";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Destination></Destination> */}

      {/* <Contact></Contact> */}

      {/* <Food2></Food2> */}

      <Navbar></Navbar>
      <Routes>
        <Route path="/Home" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/Main" element={<Main />} />
      </Routes>
      <Routes>
        <Route path="/Destination" element={<Destination />} />
      </Routes>
      <Routes>
        <Route path="/Food2" element={<Food2 />} />
      </Routes>
      <Routes>
        <Route path="/About" element={<About />} />
      </Routes>
      <Routes>
        <Route path="/Contact" element={<Contact />} />
      </Routes>

      {/* <Main /> */}
      {/* <Special></Special> */}
      {/* <Middle></Middle> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
