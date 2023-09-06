import React from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import Parent from "./components/parent/Parent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Newrequest from "./components/newrequest/Newrequest";
import Support from "./components/support/Support";
import Keyownsearch from "./components/keyownsearch/Keyownsearch";
import Myrequest from "./components/myrequest/Myrequest";
import CustomizedTables from "./components/userManagement/User/UserManagement";
import UserManagementHome from "./components/userManagement/user-home-page/userManagementHome";

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
      <Parent>
        <Routes>
            <Route path="" element={<Home />} />
            <Route path="user" element={<UserManagementHome />} />
            <Route path="userdetails" element={<CustomizedTables />} />
            <Route path="support" element={<Support />} />
            <Route path="newrequest" element={<Newrequest />} />
            <Route path="myrequest" element={<Myrequest />} />           
            <Route path="keyownsearch" element={<Keyownsearch />} />           
          </Routes>
        </Parent>
      </BrowserRouter>
    </div>
  );
}

export default App;
