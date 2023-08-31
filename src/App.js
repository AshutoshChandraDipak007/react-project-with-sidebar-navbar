import React from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import Parent from "./components/parent/Parent";
import SideBar from "./components/sidebar/SideBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SideBar />  
      <Parent>
              
      </Parent>
      <Footer></Footer>
    </div>
  );
}

export default App;
