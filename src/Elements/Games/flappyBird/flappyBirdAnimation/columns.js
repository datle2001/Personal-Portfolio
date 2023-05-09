import { FLYINGSPACE, HOLEHEIGHT, COLUMNWIDTH, COLUMNLEFT, COLUMNBOTTOM } from "./gameConfig";

export const Columns = ({topHeight}) => {
 let bottomHeight = FLYINGSPACE - HOLEHEIGHT - topHeight;
 
 return(
   <div>
     <div className='column column-animate' style={{width: COLUMNWIDTH, top: 0, left: COLUMNLEFT, height: topHeight}}></div>
     <div className='column column-animate' style={{width: COLUMNWIDTH, bottom: COLUMNBOTTOM, left: COLUMNLEFT, height: bottomHeight}}></div>
   </div>
 )
}