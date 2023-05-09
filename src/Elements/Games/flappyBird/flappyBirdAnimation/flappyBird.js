import React, { useEffect } from "react";
import '../flappyBirdCenter.css'
import { useState } from "react";
import {SCREENHEIGHT, SCREENWIDTH, 
  GRASSHEIGHT, GROUNDHEIGHT, 
  FLYINGSPACE,
  SOARDIST,FALLDIST,
  gameOver,gameOverScore,playingScore, BIRDWIDTH, BIRDHEIGHT} from "./gameConfig";
import { Bird } from "./bird";
import { Columns } from "./columns";  
import { randomHeight, hasHitGround, hasScored, overlap } from "./helper";
import { Score } from "./score";

export const FlappyBird = ({over, setOver, replay}) => { 
  const [score, setScore] = useState(0)
  const [birdTop, setBirdTop] = useState(FLYINGSPACE/2)
  const [topColHeight, setTopColHeight] = useState(randomHeight())
  let gameTimerId
  const gamesDiv = document.getElementById('games')

  const birdSoar = () => {
    setBirdTop(birdTop - SOARDIST)
  }
  useEffect(() => {
    if(birdTop + BIRDHEIGHT <= SCREENHEIGHT - GROUNDHEIGHT - GRASSHEIGHT) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      gameTimerId = setInterval(() => {
        setBirdTop(birdTop + FALLDIST)
      }, 20)

      return () => {
        clearInterval(gameTimerId)
      }
    }
  }, [birdTop])

  const handleClick = (event) => {
    birdSoar()
  }
  const handleKey = (event) => {
    event.preventDefault()
    birdSoar()
    const gameDivPos = gamesDiv.getBoundingClientRect()
    console.log(gameDivPos)
  }

  useEffect(() => {
    gamesDiv.onclick = handleClick
    document.onkeydown = handleKey
  }, [])
  return (
    <div className='game' style={{height: SCREENHEIGHT, width: SCREENWIDTH}}>
      <div id='ground' style={{height: GROUNDHEIGHT}}/>
      <div id='grass' style={{height: GRASSHEIGHT}}/>
      <Score score={score} over={over} replay={replay}/>
      <Columns topHeight={topColHeight}/>
      <Bird birdTop={birdTop}/>
    </div>
  )
}
