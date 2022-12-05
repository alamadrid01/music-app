import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import ErrorPage from "./pages/error/ErrorPage";
import Album from "./pages/album/Album";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
          <Router>
            {/* <Navbar />
            <Sidebar /> */}
            <Routes>
              <Route path='/' element ={<Homepage />}/>
              <Route path="/album" element={<Album />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Router>
    </div>
  );
}

export default App;
