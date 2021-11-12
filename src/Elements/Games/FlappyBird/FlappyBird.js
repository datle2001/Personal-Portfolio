import React from "react";
import './FlappyBird.css'

const SCREENWIDTH = 650, SCREENHEIGHT = 600;
const GROUNDHEIGHT = 50, GRASSHEIGHT = 20;
const BIRDWIDTH = 50, BIRDHEIGHT = 35;
const COLUMNWIDTH = 100, COLUMNBOTTOM = GROUNDHEIGHT+GRASSHEIGHT, COLUMNLEFT = SCREENWIDTH/2;
const HOLEHEIGHT = 125;
const FLYINGSPACE = SCREENHEIGHT - GROUNDHEIGHT - GRASSHEIGHT;
let handle;

const gameOver = {
  top: SCREENHEIGHT/2-100, 
  left: SCREENWIDTH/2-80
}
const gameOverScore = {
  top: SCREENHEIGHT/2-50, 
  left: SCREENWIDTH/2-60
}
const playingScore = {
  top: 0,
  left: SCREENWIDTH/2-60
}

function randomHeight() {
  return Math.random()*(FLYINGSPACE - HOLEHEIGHT);
};
function overlap(birdRect, colRect) {
  let res = !(birdRect.top > colRect.bottom || birdRect.bottom < colRect.top || birdRect.left > colRect.right || birdRect.right < colRect.left);
  return res;
}
function hitGround(birdRect, grassRect) {
  return birdRect.bottom >= grassRect.top;
}
function scored(birdRect, colRect) {
  return birdRect.top > colRect.bottom 
  && birdRect.right < colRect.right - COLUMNWIDTH/2 + BIRDWIDTH/2 + 19
  && birdRect.left > colRect.right - COLUMNWIDTH/2 - BIRDWIDTH/2 -19;
}
class Score extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0
    }
    this.increaseScore = this.increaseScore.bind(this);
    this.checkScored  = this.checkScored.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSpace = this.handleSpace.bind(this);
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleSpace);
    document.addEventListener('click', this.handleClick);
  }
  checkScored() {
    let colRect = document.querySelector('.column').getBoundingClientRect();
    let birdRect = document.querySelector('#bird').getBoundingClientRect();
    
    if(!this.props.over && scored(birdRect, colRect)) {
      this.increaseScore();
    }
  }
  increaseScore() {
    this.setState(state => ({
      score: state.score+1
    }))
  }
  handleClick(event) {
    if(window.scrollY >= 1200 && event.clientX > 364 && event.clientX<1017 && event.clientY > 7 && event.clientY< 305) {
      event.preventDefault();
      this.checkScored();
    }
  }
  handleSpace(event) {
    if(window.scrollY >= 1200 && event.code === 'Space') {
      event.preventDefault();
      this.checkScored();
    }
  }
  render() {
    if(!this.props.over) {
      return (
        <h2 style={playingScore}>Score: {this.state.score}</h2>
      )
    }
    else {
      return (
        <div>
          <h1 className='announce'  style={gameOver}>
            Game Over!
          </h1>
          <h2 className='announce' style={gameOverScore}>Score: {this.state.score}</h2>
        </div>
      )
    }
  }
}
class Columns extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topHeight: randomHeight()
    }
    this.setTopHeight = this.setTopHeight.bind(this);
  }
  componentDidMount() {
    document.addEventListener('animationiteration', this.setTopHeight);
  };
  setTopHeight() {
    this.setState(() => ({
      topHeight: randomHeight()
    }))
  };
  render() {
    let bottomHeight = FLYINGSPACE - HOLEHEIGHT - this.state.topHeight;
    return(
      <div>
        <div className='column column-animate' style={{width: COLUMNWIDTH, top: 0, left: COLUMNLEFT, height: this.state.topHeight}}></div>
        <div className='column column-animate' style={{width: COLUMNWIDTH, bottom: COLUMNBOTTOM, left: COLUMNLEFT, height: bottomHeight}}></div>
      </div>
    )
  }
}
class Bird extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      top: FLYINGSPACE/2, left: SCREENWIDTH/2-BIRDWIDTH/2,
      alive: true, smashed: false, 
    }
    this.birdFall = this.birdFall.bind(this);
    this.birdSoar = this.birdSoar.bind(this);
    this.birdAlive = this.birdAlive.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSpace = this.handleSpace.bind(this);
    this.toggleAlive = this.toggleAlive.bind(this);
    this.toggleSmashed = this.toggleSmashed.bind(this);
  }
  componentDidMount() {
    handle = setInterval(this.birdFall,20);
    document.addEventListener('click', this.handleClick);
    document.addEventListener('keydown', this.handleSpace);
  }
  componentDidUpdate() {
    this.birdAlive();
  }
  birdFall() {
    this.setState(state => ({
      top: state.top + 5
    }))
  }
  birdSoar() {
    this.setState(state => ({
      top: state.top - 40
    }))
  }
  birdAlive() {
    if(this.state.alive) {
      let columns = document.querySelectorAll('.column');
      let bird =  document.querySelector('#bird');
      let birdRect =bird.getBoundingClientRect();
      let grassRect = document.querySelector('#grass').getBoundingClientRect();
      if(!this.state.smashed && !this.props.over) {
        for(let i = 0; i<columns.length; i++) {
          const colRect = columns[i].getBoundingClientRect();
          if(overlap(birdRect, colRect)) {
            //unable to fly after smashed
            document.removeEventListener('click', this.handleClick);
            this.toggleSmashed();
            this.props.toggleOver();
          } 
        }
      }
      if(hitGround(birdRect, grassRect)) {
        this.toggleAlive();
        if(!this.props.over)this.props.toggleOver();
        clearInterval(handle);
        document.removeEventListener('click', this.handleClick);
      }
    }
  }
  
  toggleSmashed() {
    this.setState((state) =>({
      smashed: !state.smashed
    }))
  }
  toggleAlive() {
    this.setState(state => ({
      alive: !state.alive
    }))
  }
  handleClick(event) {
    if(window.scrollY >= 1200 && event.clientX > 364 && event.clientX<1017 && event.clientY > 7 && event.clientY< 305) {
      event.preventDefault();
      this.birdSoar();
    }
  }
  handleSpace(event) {
    if(window.scrollY >= 1200 && event.code === 'Space') {
      event.preventDefault();
      if(this.state.alive && !this.state.smashed) this.birdSoar();
    }
  }
  render() {
    return (
      <div id='bird' style={{width: BIRDWIDTH, height: BIRDHEIGHT, left: this.state.left, top: this.state.top}}></div>
    )
  }
}
export default class FlappyBird extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      over: false
    }
    this.toggleOver = this.toggleOver.bind(this);
  }
  toggleOver() {
    this.setState(state => ({
      over: !state.over
    }))
  }
  render() {
    return(
      <div id='flappy' className='game' style={{height: SCREENHEIGHT, width: SCREENWIDTH}}>
        <div id='ground' style={{height: GROUNDHEIGHT}}/>
        <div id='grass' style={{height: GRASSHEIGHT}}/>
        <Score over={this.state.over}/>
        <Columns/>
        <Bird over={this.state.over} toggleOver={this.toggleOver}/>
      </div>
    )
  }
}

