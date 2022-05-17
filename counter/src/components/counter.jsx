import React from 'react';
import {useState} from "react";
import '../App.css'


const Counter = ({start}) => {
    const [counter, setCounter] = useState(+start);

    const handleChange = (value) => {
        if(counter + value <0) return;

        setCounter(counter+value);
    }
  return (
    <div>
      <h1>Counter With React</h1>
      <h1 className={counter == 0 ? "black": counter % 2 != 0 ? "red": "green"}>{counter}</h1>
      <button className='button' onClick={() => {handleChange(+1)}}>ADD</button>
      <button className='button' onClick={() => {handleChange(-1)}}>REDUCE</button>
      <button className='button' onClick={() => {handleChange(counter)}}>DOUBLE</button>
    </div>
  )
}

export default Counter;
