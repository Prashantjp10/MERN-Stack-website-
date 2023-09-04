import React from "react";
import Header from "./components/Header";
import Index from "../src/components/Supportengine/Index";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
function App() {
  return (
    <div className="App">
      
        <Header />
        <Index/>
      
    </div>
  );
}

export default App;
