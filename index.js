
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

function Counter() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  const handleIncrease = () => {
    if (count < 10) {
      setCount(count + 1);
    } else {
      setMessage('You have reached the limit!');
    }
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
      setMessage('');
    }
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      {message && <p>{message}</p>}
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter />);

export default Counter;

  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
