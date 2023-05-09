import { useEffect, useState } from "react";
import {SCREENWIDTH, BIRDHEIGHT, BIRDWIDTH, FLYINGSPACE, FALLDIST, SOARDIST} from "./gameConfig";

export const Bird = ({birdTop}) => {
  
  return (
    <div id='bird' style={{width: BIRDWIDTH, height: BIRDHEIGHT, left: SCREENWIDTH/2-BIRDWIDTH/2, top: birdTop}}/>
  )
}