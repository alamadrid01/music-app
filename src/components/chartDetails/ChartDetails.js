import React from 'react'
import { useGlobalContext } from '../../Context/Context'

function ChartDetails() {
    const {data, play_one, play_two} = useGlobalContext();
    console.log(data);
    console.log(play_one);
    console.log(play_two);

  return (
    <div>
      <div className="chartDetails">
       This is the list of playlist in this chart
      </div>
    </div>
  )
}

export default ChartDetails

