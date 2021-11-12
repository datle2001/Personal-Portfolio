import './Games.css'
import './FlappyBird/FlappyBird.css'
import FlappyBird from './FlappyBird/FlappyBird';
import React from 'react';

const SCREENWIDTH = 650, SCREENHEIGHT = 600;
const GROUNDHEIGHT = 50, GRASSHEIGHT = 20;
const BIRDWIDTH = 50, BIRDHEIGHT = 35;
const COLUMNWIDTH = 100, COLUMNBOTTOM = GROUNDHEIGHT+GRASSHEIGHT, COLUMNLEFT = SCREENWIDTH/2;
const HOLEHEIGHT = 125;
const FLYINGSPACE = SCREENHEIGHT - GROUNDHEIGHT - GRASSHEIGHT;

const StaticGame = () => {
  return (
    <div className='game' style={{height: SCREENHEIGHT, width: SCREENWIDTH}}>
      <div id='ground' style={{height: GROUNDHEIGHT}}/>
      <div id='grass' style={{height: GRASSHEIGHT}}/>
      <div className='column' style={{width: COLUMNWIDTH, top: 0, left: SCREENWIDTH-100, height: 300}}></div>
      <div className='column' style={{width: COLUMNWIDTH, bottom: COLUMNBOTTOM, left: SCREENWIDTH-100, height: FLYINGSPACE-300-HOLEHEIGHT}}></div>
      <div id='bird' style={{width: BIRDWIDTH, height: BIRDHEIGHT, left: SCREENWIDTH/2-BIRDWIDTH/2, top: FLYINGSPACE/2}}/>
    </div>
  )
}
const ViewRender = (props) => {
  if(!props.started) {
    return(
      <div>
        <i className='bi bi-caret-right-fill gameControl' onClick={props.toggleStarted}/>
        <StaticGame/>
      </div>
    )
  }
  else {
    return(
        <FlappyBird over={props.over} toggleOver={props.toggleOver}/>
    )
  }
}
class Games extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      started:false,
      over: false
    }
    this.toggleStarted= this.toggleStarted.bind(this);
    this.toggleOver = this.toggleOver.bind(this);
  }
  toggleStarted() {
    this.setState(state => ({
      started: !state.started
    }))
  }
  toggleOver() {
    this.setState(state => ({
      over: !state.over
    }))
  }
  render() {
    return (
      <div id="games" className="section">
        <h2>Every-week Game</h2>
        <ViewRender started={this.state.started} over={this.state.over} toggleStarted={this.toggleStarted} toggleOver={this.toggleOver}/>
      </div>
    );
  }
}

export default Games;