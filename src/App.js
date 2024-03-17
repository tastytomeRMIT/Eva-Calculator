import { useState } from 'react'; // For remembering and displaying values
import evahead from './evahead.png';
import './App.css'; // Add the missing package name after the import statement

function App() {
  // Calculator 

  // HOOKS

  // Setup hook for remembering the current value via useState
  // This is basically a variable that will be remembered, and a function to update it 
  const [input, setInput] = useState(0); 
  const [total, setTotal] = useState(); // Set total to no value initially 

  // NUMBER BUTTONS
  const handleNumber = (number) => {
    setInput((input * 10) + number);
  }

  const handleDecimal = () => {
  }

  function handleEquals() {
  }

  // OPERATIONS

  function handleClear() {
    setInput(0);
    setTotal(0);
  }

  function handleAdd() {
  } 

  function handleSubtract() {
  }

  function handleMultiply() {
  }

  function handleDivide() {
  }

  function handleDelete() {
  }
  
  // JSX  
  return (

    // NOTE: need to wrap the JSX in a single parent element (outermost div)
    <div className='App'>

      <div className ='evahead'>
        <img src={evahead} alt="evahead" />
      </div>

      <div className='calculator'>
          <div className='display'>
            <span>({total})</span>
            {input}
          </div>

          <div className='operations'>
            <button className='button' onClick={() => handleClear()}>AC</button>
            <button className='button' onClick={() => handleAdd()}>+</button>
            <button className='button' onClick={() => handleSubtract()}>-</button>
            <button className='button' onClick={() => handleMultiply()}>*</button>
            <button className='button' onClick={() => handleDivide()}>/</button>
            <button className='button' onClick={() => handleDelete()}>DEL</button>
          </div>

          <div className='numbers'>
            <button className='button' onClick={() => handleNumber(7)}>7</button>
            <button className='button' onClick={() => handleNumber(8)}>8</button>
            <button className='button' onClick={() => handleNumber(9)}>9</button>
            <button className='button' onClick={() => handleNumber(4)}>4</button>
            <button className='button' onClick={() => handleNumber(5)}>5</button>
            <button className='button' onClick={() => handleNumber(6)}>6</button>
            <button className='button' onClick={() => handleNumber(1)}>1</button>
            <button className='button' onClick={() => handleNumber(2)}>2</button>
            <button className='button' onClick={() => handleNumber(3)}>3</button>
            <button className='button' onClick={() => handleNumber(0)}>0</button>
            <button className='button' onClick={() => handleDecimal()}>.</button>
            <button className='button' onClick={() => handleEquals()}>=</button>
          </div>
      </div>
    </div>
  );
}

export default App;