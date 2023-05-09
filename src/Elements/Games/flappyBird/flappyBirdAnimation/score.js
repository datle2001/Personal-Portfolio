import { gameOver, gameOverScore, playingScore } from "./gameConfig"

export const Score = ({over, score, replay}) => {
 if(!over) {
   return (
     <h2 className='announce' style={playingScore}>Score: {score}</h2>
   )
 }
 return (
   <div>
     <i className='bi bi-arrow-clockwise gameControl' onClick={replay}/>
     <h1 className='announce'  style={gameOver}>Game Over!</h1>
     <h2 className='announce' style={gameOverScore}>Score: {score}</h2>
   </div>
 )
}