import "./App.css"
import React from "react";
import SideNavBar from "./components/includes/SideNavBar"
// import Header from "./components/includes/Header"
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <>
       <BrowserRouter>
          <SideNavBar />
          {/* <Header /> */}
          <Routes>
            <Route  />
          </Routes>
       </BrowserRouter>
    </>
  );
}
export default App;
