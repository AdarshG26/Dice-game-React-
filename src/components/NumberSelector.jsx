import React, { useState } from 'react'
import styled from 'styled-components'

const NumberSelector = ({selectedNumber, setSelectedNumber, error, setError}) => {

    const arrNum = [1,2,3,4,5,6];

    const numberSelectorHandler = (value)=> {
        setSelectedNumber(value)
        setError("")
    }

  return (
    <NumberSelectorContainer>
        <p className='error'>{error}</p>
        <div className='flex'>
            {
                arrNum.map((value, i)=>{
                    return (
                        <Box onClick={()=>numberSelectorHandler(value)}
                            key={i} 
                            isSelected = {value === selectedNumber}
                            >
                            {value}
                        </Box>
                    )
                })
            }
        </div>
        <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector


const Box = styled.div`
    height: 65px;
    width: 65px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;

    background-color: ${(props)=> props.isSelected ? 'black' : 'white'};
    color: ${(props)=> props.isSelected ? 'white' : 'black'};
`;

const NumberSelectorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    .flex {
        display: flex;
        gap: 22px;
    }
    p {
        font-size: 24px;
        font-weight: 700;
    }
    .error{
        color: red;
    }
`;