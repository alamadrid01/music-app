import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import ErrorPage from "./pages/error/ErrorPage";
import Album from "./pages/album/Album";
import axios from "axios";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import Songs from "./components/songs/Songs";
import CurrentPlayer from "./components/currenPlayer/CurrentPlayer";

export const User = React.createContext();

function App() {
  const [data, setData] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [currentSong, setCurrentSong] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://shazam-core.p.rapidapi.com/v1/charts/world",
      headers: {
        "X-RapidAPI-Key": "aa52058a48msha779089f63619d6p10d638jsn24e7f022859c",
        "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
      },
    };
    
    axios
      .request(options)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        setError(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://musica-api.up.railway.app/popular")
      .then((res) => {
        setPlaylist(res.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  return (
    <div className="App">
      <User.Provider value={{ data, error, playlist, currentSong, setCurrentSong }}>
        <Router>
          <Sidebar />
          <Navbar />
          <CurrentPlayer />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/songs" element={<Album />} />
            <Route path="/songs/:songId" element={<Songs />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </User.Provider>
    </div>
  );
}

export default App;
