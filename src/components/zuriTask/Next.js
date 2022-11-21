import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {FileName, File } from "../../App";

function Next() {
  const file = useContext(File)
  const fileName = useContext(FileName)

  const Navigate = useNavigate();
  const continueHandler = () => {
    
  };
  const back = () => {
    Navigate('/')
  };

  return (
    <div>
      
        <h1>File selected: {fileName} </h1>
        {
            console.log(file )
        }
        <br />
        <button onClick={back}>Back</button>
        <button onClick={continueHandler}>Continue</button>
      
    </div>
  );
}

export default Next;
