import { useState } from 'react';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [count, setCount] = useState(0);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoggedIn(true);
  };

  return (
    <div className="container">
      {!loggedIn ? (
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      ) : (
        <>
          <h2>Welcome!</h2>
          <p>Counter: {count}</p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </>
      )}
    </div>
  );
}

export default App;
