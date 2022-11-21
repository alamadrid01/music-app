import React, { useContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import ErrorPage from "./pages/error/ErrorPage";
import Task from "./components/zuriTask/Task";
import Next from "./components/zuriTask/Next";

export const File = React.createContext();
export const SetFile = React.createContext();
export const FileName = React.createContext();
export const SetFileName = React.createContext();

function App() {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");


  const FileProvider = File.Provider;
  const FileNameProvider = FileName.Provider;
  const SetFileNameProvider = SetFileName.Provider;
  const SetFileProvider = SetFile.Provider;


  

  return (
    <div className="App">
      <FileProvider value={file}>
        <SetFileProvider value={setFile}>
        <FileNameProvider value={fileName}>
        <SetFileNameProvider value={setFileName}>
          <Router>
            <Routes>
              <Route path='/' element ={<Homepage />}/>
              {/* <Route path="/" element={<Task />} /> */}
              <Route path="/next" element={<Next />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Router>
        </SetFileNameProvider>
        </FileNameProvider>
        </SetFileProvider>
      </FileProvider>
    </div>
  );
}

export default App;
