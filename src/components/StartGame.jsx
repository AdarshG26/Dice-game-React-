import React from 'react'
import styled from 'styled-components'

const StartGame = ({toggle}) => {

    const handlePlayNow = ()=>{
        toggle();
    }

  return (
    <Container>
        <div>
            <img src="/images/dices.png" alt="" />
        </div>
        <div  className='content'>
            <h1>Dice Game</h1>
            <Button onClick={handlePlayNow}> Play Now </Button> 
        </div>
    </Container>
  )
}

export default StartGame


const Container = styled.div`
    max-width: 1180px;
    display: flex;
    margin: 0 auto;
    height: 100vh;
    align-items: center;

    .content {
        h1{
            font-size: 96px;
            white-space: nowrap;
            margin-top: -4rem;
        }
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