import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'
import { useState } from 'react'
import ShowRules from './ShowRules'

const GamePlay = () => {

  const [selectedNumber, setSelectedNumber] = useState()

  const [currentDice, setCurrentDice] = useState(1)

  const [score, setScore] = useState(0)

  const [error, setError] = useState("")

  const [showRules, setShowRules] = useState(false)

  const generateRandomNum = (min, max)=> {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const handleDiceRoll = ()=> {

    if(!selectedNumber){
      setError("You have not seleted any number!");
      return
    }

    let randomNum = generateRandomNum(1, 7);
    setCurrentDice((prev)=> randomNum);

    if(selectedNumber === randomNum){
      setScore((prev)=> prev + randomNum);
    }
    else{
      setScore((prev)=> prev - 2);
    }

    setSelectedNumber(undefined)
  }

  const handleResetButton = ()=> {
    setScore(0);
  }

  const toggleRules = ()=> {
    setShowRules(prev => !prev)
  }

  return (
    <MainContainer>
      <div className='topSection'>
        <TotalScore score={score}/>
        <NumberSelector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} error={error} setError={setError}/>
      </div>
      <RollDice currentDice={currentDice} handleDiceRoll={handleDiceRoll}/>

      <div className="buttons">
        <Button onClick={handleResetButton}> Reset </Button>
        <Button onClick={toggleRules}>{showRules ? 'Hide' : 'Show'} Rules </Button>
      </div>

      {showRules && <ShowRules />}
    </MainContainer>
  )
}

export default GamePlay


const MainContainer = styled.div`
  padding-top: 1px;
  .topSection {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }

  .buttons {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
`;

const Button = styled.button`
    background: #000000;
    color: white;
    padding: 10px 18px;
    border: 2px solid transparent;
    border-radius: 5px;
    min-width: 220px;
    font-size: 16px;
    transition: 0.3s background ease-in;
    cursor: pointer;

    &:hover{
        background-color: white;
        color: black;
        border: 2px solid black;
        transition: 0.2s background ease-in;
    }
`;