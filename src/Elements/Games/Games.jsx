import './Games.css'
import FlappyBird from './FlappyBird/FlappyBird';

const Games =() => {
  return (
    <div id="games" className="section">
      <h2>Every-week Game</h2>
      <FlappyBird/>
    </div>
  );
}

export default Games;