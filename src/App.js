import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Visa from "./components/Visa";
import Fruits from "./components/Fruits";
import Air from "./components/Air";
import Particle from "./components/Particle";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/visa" element={<Visa></Visa>}></Route>
        <Route path="/fruits" element={<Fruits></Fruits>}></Route>
        <Route path="/air-condition" element={<Air></Air>}></Route>

      </Routes>
      <Footer></Footer>
      <Particle></Particle>
    </div>
  );
}

export default App;
