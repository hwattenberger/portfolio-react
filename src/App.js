import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion'

import './App.css';
import Projects from './components/Projects';
import MainProject from './components/MainProject';
import LandingTop from './components/LandingTop';
import LandingTop2 from './components/LandingTop2';

import noriBoxLg from './images/nori-box.png'
import noriBoxSm from './images/nori-box-128.png'
import Test from './Test';

import Project1 from './components/projects/Project1';
import Project2 from './components/projects/Project2';

const transition = { duration: 5, ease: [.6, .01, .23, .96]};

const projectVariants = {
  offscreen: {
    y: 80
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: .4,
      duration: 1
    }
  }
}

const projectsList = [<Project1/>, <Project2/>]

function App() {
  const [projectNum, setProjectNum] = useState(1);

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <div id="intro" className="h-screen flex items-center flex-col justify-center bg-purple-300 text-center">
          <LandingTop2/>
        </div>
        <div id="work" className="min-h-screen flex flex-col">
          {projectsList.map((project, ix)=> (
            <motion.div className="mx-auto my-4 bg-blue-300 w-11/12 rounded h-96" key={ix} initial="offscreen" viewport={{once: true}} whileInView="onscreen" variants={projectVariants}>
            {project}
          </motion.div>
          ))}
          {/* <MainProject projectNum={projectNum} />
          <Projects projectNum={projectNum} setProjectNum={setProjectNum}/> */}
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
