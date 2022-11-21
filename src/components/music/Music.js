import React, { useState, useEffect } from "react";
import axios from "axios";

const Music = (WrappedComponent) => {
  function Music() {
    const [data, setData] = useState();

    useEffect(() => {
      axios
        .get("https://musica-api.up.railway.app/popular")
        .then((response) => {
          setData(response.data[0]);
        })
        .catch((err) => {
          console.log("This is the error:" + err);
        });
    }, [data]);

    return (
        <WrappedComponent
          data={data}
      />
    );
  }

  return Music;
};

export default Music;
