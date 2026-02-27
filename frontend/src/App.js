import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { CTA } from "./components/CTA";
import { About } from "./components/About";
import { Footer } from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Hero />
        <Services />
        <CTA />
        <About />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
