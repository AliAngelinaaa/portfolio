import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Navigation Bar */}
      <nav className="p-4 bg-rose-500 bg-rose-100 rounded-md border-2 border-rose-100">
        <ul className="flex flex-row space-x-8 font-medium">
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto mt-2">
        <div className="flex flex-row gap-2">
          
          {/* Left Column */}
          <div className="basis-2/3 space-y-2">
            <div className="flex gap-2">
              <div className="flex-1 p-4 rounded-md border-2 border-rose-100">Top 1</div>
              <div className="flex-1 p-4 rounded-md border-2 border-rose-100">Top 2</div>
            </div>
            <div className="flex gap-2">
              <div className="flex-1 p-4 rounded-md border-2 border-rose-100">Down 1</div>
              <div className="flex-1 p-4 rounded-md border-2 border-rose-300 bg-rose-300">Down 2</div>
            </div>
          </div>

          {/* Right Column */}
          <div className="basis-1/3 p-4 rounded-md border-2 border-rose-100">
            Side
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
