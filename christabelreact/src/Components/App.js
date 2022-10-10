import React from "react";
import Navbar from "./Nav/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Firstsect from "./First-section/Firstsect";
import Secondsect from "./Second-section/Secondsect";
import Footersect from "./Footer-section/Footersect";
import Thirdsect from "./Third-section/Thirdsect";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Firstsect />
      <Secondsect />
      <Thirdsect />
      <Footersect />
    </div>
  );
}

export default App;
