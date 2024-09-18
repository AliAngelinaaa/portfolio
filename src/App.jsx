import { useState } from 'react';
import './App.css';
import Home from './components/home';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{width:'100%'}}>
    {<Home/>}
    </div>
  );
}

export default App;
