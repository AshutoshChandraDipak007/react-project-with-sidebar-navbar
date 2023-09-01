import React from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import Parent from "./components/parent/Parent";
import SideBar from "./components/sidebar/SideBar";
import UserManagement from "./components/userManagement/UserManagement";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Newrequest from "./components/newrequest/Newrequest";
import Support from "./components/support/Support";
import Keyownsearch from "./components/keyownsearch/Keyownsearch";

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
      <Parent>
        <Routes>
        <Route path="" element={<Home />} />
            <Route path="user" element={<UserManagement />} />
            <Route path="support" element={<Support />} />
            <Route path="newrequest" element={<Newrequest />} />
            <Route path="myrequest" element={<UserManagement />} />           
            <Route path="keyownsearch" element={<Keyownsearch />} />           
          </Routes>
        </Parent>
      </BrowserRouter>
    </div>
  );
}

export default App;
