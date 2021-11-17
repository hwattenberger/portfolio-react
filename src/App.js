import React, {useState} from 'react';

import './App.css';
import Projects from './components/Projects';
import MainProject from './components/MainProject';

import noriBox from './images/nori-box.png'

function App() {
  const [projectNum, setProjectNum] = useState(1);

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <div id="intro" className="h-screen flex flex-col justify-center bg-purple-300">
          <p>Hi - I'm...</p>
          <h1 className="text-4xl	font-bold	">Hilary Wattenberger</h1>
          <p>Thanks for visiting!  Take a look at some of the projects I've been working on recently.</p>
          <a href="#work"><button className="px-8 py-2 mt-4 bg-gray-400	rounded-md	">Learn More</button></a>
          <img src={noriBox} className="object-none"></img>
        </div>
        <div className="h-screen flex flex-col lg:flex-row">
          <MainProject projectNum={projectNum} />
          <Projects projectNum={projectNum} setProjectNum={setProjectNum}/>
        </div>
      </main>
    </div>
  );
}

export default App;
