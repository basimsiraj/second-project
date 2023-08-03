import "./App.css"
import React from "react";
import styled from "styled-components";
import SideNavBar from "./components/includes/SideNavBar"
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./components/screens/Home";
import Schedular from "./components/screens/Schedular";
import Technology from "./components/screens/Technology";
import Rewards from "./components/screens/Rewards";
import Notes from "./components/screens/Notes";
import Submission from "./components/screens/Submission";

function App() {
  return (
    <>
       <BrowserRouter>
       <Container>
            <SideNavBar />
            <Routes>
              <Route  path="/" element={<Home />} />
              <Route  path="/schedular" element={<Schedular />} />
              <Route  path="/technology" element={<Technology />} />
              <Route  path="/rewards" element={<Rewards />} />
              <Route  path="/notes" element={<Notes />} />
              <Route  path="/submission" element={<Submission />} />
            </Routes>
        </Container>
       </BrowserRouter>
    </>
  );
}
const Container = styled.div`
  display: flex;
`;
export default App;
