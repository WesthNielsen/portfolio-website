import React from "react";
import NavBar from "./components/NavBar";
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
