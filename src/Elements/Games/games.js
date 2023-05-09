import './games.css'
import {FlappyBirdCenter} from './flappyBird/flappyBirdCenter';

export const Games = () => {
  return (
    <div id="games" className="section">
      <h2>Weekly Game</h2>
      <FlappyBirdCenter/>
    </div>
  );
}