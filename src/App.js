import React from "react";
import "./Components/assets/css/styles.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";

{
  /* <link href="css/styles.css" rel="stylesheet" />; */
}
const App = () => {
  return (
    <div>
      <Navbar />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
