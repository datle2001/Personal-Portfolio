import { Bird } from "./bird";
import {SCREENHEIGHT, SCREENWIDTH, 
  GRASSHEIGHT, GROUNDHEIGHT,
  COLUMNBOTTOM, COLUMNWIDTH, 
  HOLEHEIGHT,
  FLYINGSPACE} from "./gameConfig";

export const StaticGame = () => {
 return (
    <div className='game' style={{height: SCREENHEIGHT, width: SCREENWIDTH}}>
      <div id='ground' style={{height: GROUNDHEIGHT}}/>
      <div id='grass' style={{height: GRASSHEIGHT}}/>
      <div className='column' style={{width: COLUMNWIDTH, top: 0, left: SCREENWIDTH-100, height: 300}}/>
      <div className='column' style={{width: COLUMNWIDTH, bottom: COLUMNBOTTOM, left: SCREENWIDTH-100, height: FLYINGSPACE-300-HOLEHEIGHT}}/>
      <Bird birdTop={FLYINGSPACE/2}/>   
    </div>
 )
}