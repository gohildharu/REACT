import logo from "./logo.svg";
import "./App.css";
import Main from "./Component/Main";
import Hero from "./Component/Hero";
import Navbar from "./Component/Nav";
import Special from "./Component/Special";
import Food from "./Component/Food";
import Food2 from "./Component/Food2";
import Destination from "./Component/Destination";
import Home from "./Component/Home";
import Footer from "./Component/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Navbar></Navbar>
      <Main />
      <Special></Special>
      <Home></Home>
      <Footer></Footer> */}
      {/* <Destination></Destination> */}
      {/* <Hero></Hero> */}
      {/* <Food2></Food2> */}
      <Routes>
        {/* // <Route path="/" element={<Home />} /> */}
        <Route path="/Food2" element={<Food2 />} />
        <Route path="/Destination" element={<Destination />} />
      </Routes>
    </div>
  );
}

export default App;
