import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios"

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [data, setData] = useState()
    const [play_one, setPlay_one] = useState()
    const [play_two, setPlay_two] = useState()
    const [play_three, setPlay_three] = useState()          
    const [play_four, setPlay_four] = useState()          
    const [play_five, setPlay_five] = useState()          
    const [play_six, setPlay_six] = useState()          

     
    useEffect(() => {
      axios
        .get("https://musica-api.up.railway.app/popular")
        .then((response) => {
            console.log(response)
          setData(response);
          setPlay_one(response)
          setPlay_two(response)
          setPlay_three()
          setPlay_four()
          setPlay_five()
          setPlay_six()
        })
        .catch((err) => {
          console.log("This is the error:" + err);
        });
    }, [data]);
    

	return (
		<AppContext.Provider
			value={{
                data,
				play_one,
                play_two,
                play_three,
                play_four,
                play_five,
                play_six
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

// invoke this hook in any component to have access to the global state
export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppProvider };
