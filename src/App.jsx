import { useState } from 'react';
import './App.css';
import Home from './components/home';
import Nav from './components/nav';
import Timeline from './components/timeline';
import Footer from './components/footer';
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {<Nav/>}
      {<Home/>}
      {<Timeline/>}
      {<Footer/>}
    </div>
  );
}

export default App;
