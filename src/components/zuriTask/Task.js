import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./task.scss";
import { File, FileName, SetFile, SetFileName} from '../../App'



function Task() {
  const file = useContext(File);
  const fileName = useContext(FileName);
  const setFile = useContext(SetFile);
  const setFileName = useContext(SetFileName);
 
  const Navigate = useNavigate();
  const [display, setDisplay]= useState(true)

  const fileUpload = (e) => {
    setDisplay(false);
    setFile(e.target.files);
    setFileName(e.target.files[0].name);
  };
  const submit = (e) => {
    e.preventDefault();
    console.log(file);
    console.log(fileName);
    Navigate("/next");
  };
  return (
    <div>
      
        <div className="task">
          <form onSubmit={submit} action="post">
            <label>Input your pdf file</label>
            <input
              type="file"
              onChange={fileUpload}
              accept="application/pdf"
              id="file"
            />
            <button disabled={display} type="submit">
              Send File
            </button>
          </form>
        </div>
      
    </div>
  );
}

export default Task;
