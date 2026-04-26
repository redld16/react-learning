import Add from "./Components/Add";
import "./App.css";
import Header from "./Components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
function App() {
  const [h1val, setH1val] = useState("Home");
  return (
    <>
      <div className="app">
        <center>
          <nav className="nav">
            <Link onClick={() => setH1val("Home")} to="/">
              Home
            </Link>
            <Link onClick={() => setH1val("About")} to="/about">
              About
            </Link>
            <Link onClick={() => setH1val("Contact")} to="/contact">
              Contact
            </Link>
          </nav>

          <Header h1val={h1val} />

          <Add />

          <Routes>
            <Route path="/" element={""} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </center>
      </div>
    </>
  );
}

export default App;
