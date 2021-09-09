import React from "react";
import Game from "./components/Game";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar";
const App = () => (
  <div className="App">
    <NavBar>
    </NavBar>
    
    <Game id="game" className="memory-game" style={{position: "absolute"}} />
    
    
  </div>
);

export default App;
