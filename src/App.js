import React, {useState, useEffect} from 'react';

import './App.css';
import Projects from './components/Projects';
import MainProject from './components/MainProject';

import noriBoxLg from './images/nori-box.png'
import noriBoxSm from './images/nori-box-128.png'
import Test from './Test';

function App() {
  const [projectNum, setProjectNum] = useState(1);

  // const [showMain, setShowMain] = useState(false);

  // useEffect(()=> {
  //   setTimeout(()=>setShowMain(true),7000)
  // }, []);

  // if(!showMain) {
  //   return (
  //     <div className="App h-screen bg-purple-300 flex items-center justify-center">
  //       <img src={noriBoxSm} srcSet={`${noriBoxSm} 450w, ${noriBoxLg} 1280w`} className="object-none main-nori-img aspect-h-4 aspect-w-3"></img>
  //     </div>
  //   )
  // }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <div id="intro" className="h-screen flex items-center flex-col justify-center bg-purple-300 text-center">
          <p>Hi - I'm...</p>
          <h1 className="text-4xl	font-bold	">Hilary Wattenberger</h1>
          <p>Thanks for visiting!  Take a look at some of the projects I've been working on recently.</p>
          <Test><img src={noriBoxSm} srcSet={`${noriBoxSm} 450w, ${noriBoxLg} 1280w`} className="object-none main-nori-img aspect-h-4 aspect-w-3"></img></Test>
          <div>
            <a href="#work"><button className="px-8 py-2 mt-4 bg-gray-400	rounded-md m-2 transform hover:-translate-y-1 transition duration-500 ease-in-out">Projects</button></a>
            <a href="#aboutMe"><button className="px-8 py-2 mt-4 bg-gray-400 rounded-md	transform hover:-translate-y-1 transition duration-500 ease-in-out">About Me</button></a>
          </div>
        </div>
        <div id="work" className="min-h-screen flex flex-col lg:flex-row">
          <MainProject projectNum={projectNum} />
          <Projects projectNum={projectNum} setProjectNum={setProjectNum}/>
        </div>
        <div id="aboutMe" className="flex flex-col items-center justify-center bg-purple-300">
          <div className="md:w-6/12 bg-purple-100 p-4 m-4 rounded">
            <h2 className="text-3xl p-2">About Me</h2>
            <p className="p-2"><span className="font-semibold">Origin Story:</span> My coding journey began back in middle school.  I found this amazing website called Neopets and created a guild and to create a webpage for that guild, I needed to know
                HTML so I googled around and learned about tables and headings.  Then I wanted to make Neopets and I researched and learned Neopets was coded in PHP so I tried to learn
                all about PHP and MySQL.  I've been coding various things ever since!
            </p>
            <p className="p-2"><span className="font-semibold">Experience With:</span> Javascript, React, Cache, SQL, noSQL, NodeJS, HTML, CSS</p>
            <p className="p-2"><span className="font-semibold">Interests:</span> Coding (of course), cello music/playing, chamber music, piano, attempting to cook, growing people (not in the gardening sense), trying to understand what my cat is saying.</p>
          </div>
        </div>
        <div>

        </div>
      </main>
    </div>
  );
}

export default App;
