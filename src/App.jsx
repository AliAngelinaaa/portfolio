import { useState } from 'react';
import './App.css';
import Home from './components/home';
import Nav from './components/nav';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {<Nav/>}
      {<Home/>}
    </div>
  );
}

export default App;
