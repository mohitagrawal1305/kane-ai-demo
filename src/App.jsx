import { useState } from 'react';
import { Login } from './components/Login';
import { Counter } from './components/Counter';
import './styles/App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="container">
      {!loggedIn ? (
        <Login onLogin={() => setLoggedIn(true)} />
      ) : (
        <Counter />
      )}
    </div>
  );
}

export default App;
