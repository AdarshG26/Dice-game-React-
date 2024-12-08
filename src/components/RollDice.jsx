import React, { useState } from 'react'
import styled from 'styled-components'

const RollDice = ({currentDice, handleDiceRoll}) => {


  return (
    <DiceContainer>
        <div className='dice' onClick={handleDiceRoll}>
            <img src={`/images/AllDice/dice_${currentDice}.png`} alt="dice 1" />
        </div>
        <p>Click on Dice to Roll</p>
    </DiceContainer>
  )
}

export default RollDice


const DiceContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: -5px;
    flex-direction: column;

    p {
        margin-top: -15px;
        font-size: 22px;
    }
    .dice {
        cursor: pointer;
    }
`;