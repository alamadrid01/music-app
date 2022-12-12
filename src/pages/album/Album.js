import React from "react";
import "./album.scss";
import { User } from "../../App";

function Album() {
  const { data } = React.useContext(User);
  console.log(data)
  return (
    <div>
      <div className="album">
        <div className="albumContainer">
          {data.map((item) => (
            <div key ={item.key}>
              <h1> {item.title}</h1>
              <img src={item.share.image} alt='title' />
              <audio>
                <source src={item.share.href} type="audio/mpeg" />
              </audio>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Album;
