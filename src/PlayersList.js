import {useState} from "react";
import info from "./playerInfos";
import Player from "./Player";


const PlayersList = () => {
    return (
      <div>
        {info.map((player, index) => (
          <Player key={index} {...player} />
        ))}
      </div>
    );
  };
  
  export default PlayersList;

