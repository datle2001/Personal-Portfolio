import {FlappyBird}  from "./flappyBirdAnimation/flappyBird.js";
import React from "react";
import { useState } from "react";
import { StaticGame } from "./flappyBirdAnimation/staticGame.js";

export const FlappyBirdCenter = () => { 
  const [started, setStarted] = useState(false)
  const [over, setOver] = useState(false)

  const replay = () => {
    setOver(!over)
  }

  return ( 
    <>
      <h3>Flappy Bird</h3>
      {!started && 
        <>
          <i className='bi bi-caret-right-fill gameControl' onClick={() => setStarted(true)}/>
          <StaticGame/>
        </>
      }
      {started && 
        <FlappyBird over={over} setOver={setOver} replay={replay}/>
      }
    </>
  )
}