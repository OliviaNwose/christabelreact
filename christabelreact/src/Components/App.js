import React from "react";
import Navbar from "./Nav/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Firstsect from "./First-section/Firstsect";
import Secondsect from "./Second-section/Secondsect";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Firstsect />
      <Secondsect />
    </div>
  );
}

export default App;
