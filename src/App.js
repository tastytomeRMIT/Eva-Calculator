import { useState } from 'react'; 
import evahead from './evahead.png';
import './App.css';

function App() {

  const [input, setInput] = useState(''); 
  const [total, setTotal] = useState(''); 
  const [operation, setOperation] = useState(null);
  const [decimal, setDecimal] = useState(false);

  // NUMBER BUTTONS
  const handleNumber = (number) => {
    if (operation === null) {
      setTotal(''); // clear total if no operation
    }
    if (decimal) {
      setInput(input => input.toString() + number.toString());
    } else {
      setInput(input => (input * 10) + number);
    }
  }

  const handleDecimal = () => {
      if (!input.toString().includes('.')) {
        setInput(input => input + '.');
        setDecimal(true);
      } 
  }

  const handleEquals = () => {
    if (!input || !total || !operation) {
      return; // do nothing if no input or total or operation
    }

    const num1 = Number(total);
    const num2 = Number(input);

    if (operation === '+') {
      setTotal(num1 + num2);
    } else if (operation === '-') {
      setTotal(num1 - num2);
    } else if (operation === '*') {
      setTotal(num1 * num2);
    } else if (operation === '/') {
      setTotal(num1 / num2);
    }

    setOperation(null); // clear operation
    setInput(''); // clear input
    setDecimal(false); // clear decimal
  }

  // OPERATIONS

  const handleClear = () => {
    setInput('');
    setTotal('');
    setOperation(null);
    setDecimal(false);
  }

  const handleOperation = (operation) => {
    if (!input && !total) {
      return; // do nothing if no input and no total (start of app)
    }
    setOperation(operation);
    setTotal(total => Number(total) + Number(input)); // Convert total and input to numbers before adding
    setInput('');
  }

  const handleDelete = () => {
    setInput(input => input.toString().slice(0, -1));
  }

  return (

    <div className='App'>

      <div className ='evahead'>
        <img src={evahead} alt="evahead" />
      </div>

      <div className='calculator'>
          <div className='display'>
            { total ? <span>({total})</span> : <span>(0)</span> }
            <span>{operation}</span>
            { input ? input : '0' }
          </div>

          <div className='operations'>
            <button className='button' onClick={() => handleClear()}>AC</button>
            <button className='button' onClick={() => handleOperation('+')}>+</button>
            <button className='button' onClick={() => handleOperation('-')}>-</button>
            <button className='button' onClick={() => handleOperation('*')}>*</button>
            <button className='button' onClick={() => handleOperation('/')}>/</button>
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