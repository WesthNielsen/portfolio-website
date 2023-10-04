import React from "react";
import NavBar from "./components/NavBar";
import Landing from "./pages/Landing";
import Background from "./components/Background";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <div className="w-screen h-screen">
      <Background />
      <NavBar />
      <Portfolio />
    </div>
  );
}

export default App;
