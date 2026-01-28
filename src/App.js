import logo from "./logo.svg";
import "./App.css";
import Main from "./Component/Main";
import Hero from "./Component/Hero";
import Navbar from "./Component/Nav";
import Special from "./Component/Special";
import Food from "./Component/Food";
import Food2 from "./Component/Food2";
import Home from "./Component/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Main />
      {/* <Food></Food> */}
      {/* <Hero></Hero> */}
      <Special></Special>
      <Home></Home>
      {/* <Main/>
     <Row/> */}
      {/* <Hero></Hero> */}
      {/* <Food2></Food2> */}
      <Routes>
        {/* // <Route path="/" element={<Home />} /> */}
        {/* <Route path="/Food2" element={<Food2 />} /> */}
      </Routes>
    </div>
  );
}

export default App;
