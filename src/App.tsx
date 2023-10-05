import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Background from "./components/Background";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Logo from "./components/Logo";
import Contact from "./pages/Contact";

function App() {
  const [selected, setSelected] = useState(0);
  
  return (
    <div className="w-screen h-screen">
      <Background />
      <NavBar selected={selected} setSelected={setSelected} />
      {selected === 1 ? <About setSelected={setSelected}/> : null}
      {selected === 2 ? <Portfolio /> : null}
      {selected === 3 ? <Contact /> : null}
    </div>
  );
}

export default App;
