import { useState } from 'react';
import '../styles/Counter.css';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h2>Welcome!</h2>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
} 