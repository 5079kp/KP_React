import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count -1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="App">

      <div>
        <p className="text">{count}</p>
        <div className='buttons'>
          <button className='btn1' onClick={handleIncrement}>Increment</button>   
          <button className='btn3' onClick={handleReset}>Reset</button>    
          <button className='btn2' onClick={handleDecrement}>Decrement</button>
        </div>
      </div>
    </div>
  );
}

export default App;
