import logo from "./logo.svg";
import { Link } from "react-router-dom";
import {HashLink} from 'react-router-hash-link';
import "./App.css";
import Hero from "../src/components/Hero";
import About from "./components/About";
import Services from "./components/Services"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div id="App">
      <nav className="navbar shadow lg">
        <header className="container">
          <h1 className='logo'>TAHLIIL</h1>
          <ul class="menu">
            <li>
              <HashLink to="/#HERO">Home</HashLink>
            </li>
            <li>
              <HashLink to="/#ABOUT">About</HashLink>
            </li>
            <li>
              <HashLink to="/#SERVICES">Services</HashLink>
            </li>
            <li>
              <HashLink to="/#SKILLS">Skills</HashLink>
            </li>
            <li>
              <HashLink to="/#CONTACT">Contact</HashLink>
            </li>
          </ul>
        </header>
      </nav>
      <div id="HERO">
        <Hero />
      </div>
      <div id="ABOUT">
        <About />
      </div>
      <div id="SERVICES">
        <Services />
      </div>
      <div id="SKILLS">
        <Skills />
      </div>
      <div id="CONTACT">
        <Contact />
      </div>
      <div id="FOOTER">
        <Footer />
      </div>
    </div>
  );
}

export default App;
