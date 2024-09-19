import { useState } from 'react';
import './App.css';
import Home from './components/home';
import Nav from './components/nav';
import Timeline from './components/timeline';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {<Nav/>}
      {<Home/>}
      {<Timeline/>}
    </div>
  );
}

export default App;
