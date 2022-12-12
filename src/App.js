import React,{useState, useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import ErrorPage from "./pages/error/ErrorPage";
import Album from "./pages/album/Album";
import axios from 'axios';
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";

export const User = React.createContext();

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  
  
  const options = {
    method: "GET",
    url: "https://shazam-core.p.rapidapi.com/v1/charts/world",
    headers: {
      "X-RapidAPI-Key": "aa52058a48msha779089f63619d6p10d638jsn24e7f022859c",
      "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
    },
  };

  useEffect(() => {
  axios
    .request(options)
    .then(function (response) {
      setData(response.data);
    })
    .catch(function (error) {
      console.error(error);
      setError(error);
    });
  }, []);

  return (
    <div className="App">
      <User.Provider value={{ data, error }}>
          <Router>
            {/* <Navbar />
            <Sidebar /> */}
            <Routes>
              <Route path='/' element ={<Homepage />}/>
              <Route path="/album" element={<Album />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Router>
      </User.Provider>
    </div>
  );
}

export default App;
