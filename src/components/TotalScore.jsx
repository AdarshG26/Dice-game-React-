import React from 'react'
import styled from 'styled-components'

const TotalScore = ({score}) => {
  return (
    <ScoreContainer>
        <h1>{score}</h1>
        <p>Total Score</p>
    </ScoreContainer>
  )
}

export default TotalScore



const ScoreContainer = styled.div`
    max-width: 200px;
    text-align: center;
    //background-color: rebeccapurple;
    h1{
        font-size: 80px;
        line-height: 90px;
    }
    p{
        font-size: 22px;
        font-weight: 500;
    }
`;