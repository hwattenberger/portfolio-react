import React, {useState} from 'react';
import { motion } from 'framer-motion'

import './App.css';
// import Projects from './components/Projects';
// import MainProject from './components/MainProject';
// import LandingTop from './components/LandingTop';
import LandingTop2 from './components/LandingTop2';

// import noriBoxLg from './images/nori-box.png'
// import noriBoxSm from './images/nori-box-128.png'
// import Test from './Test';

import Project1 from './components/projects/Project1';
import Project2 from './components/projects/Project2';
import Project4 from './components/projects/Project4';
// import Parallax from './Parallax';

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

const projectsList = [<Project1/>, <Project2/>, <Project4/>]

const knowledgeAreas = ["Javascript", "React", "M/Cache", "SQL", "noSQL", "NodeJS", "HTML", "CSS", "MongoDB" ]

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <div id="intro" className="h-screen flex items-center flex-col justify-center bg-purple-300 text-center">
          <LandingTop2/>
        </div>
        <div id="work" className="min-h-screen flex flex-col">
          <h2 className="text-3xl p-2 ml-14 mt-6">Selected Projects</h2>
          {projectsList.map((project, ix)=> (
            <motion.div className="mx-auto my-4 w-11/12 rounded p-2" key={ix} initial="offscreen" whileInView="onscreen" variants={null}>
            {project}
            </motion.div>
          ))}
        </div>
        <div id="aboutMe" className="flex flex-col items-center justify-center bg-purple-300">
          <div className="md:w-6/12 bg-purple-100 p-4 m-4 rounded">
            <h2 className="text-3xl p-2">About Me</h2>
            <p className="p-2"><span className="font-semibold">Origin Story:</span> My coding journey began back in middle school.  I found this amazing website called Neopets and created a guild and to create a webpage for that guild, I needed to know
                HTML so I googled around and learned about tables and headings.  Then I wanted to make Neopets and I researched and learned Neopets was coded in PHP so I tried to learn
                all about PHP and MySQL.  I've been coding various things ever since!
            </p>
            <div className="p-2">
              <span className="font-semibold">Experience With:</span>
              <div className="box-border w-full flex flex-wrap">
                {knowledgeAreas.map((area)=>(
                  <span className="bg-purple-400 m-2 px-2 py-1 rounded" key={area}>
                    {area}
                  </span>
                ))}
              </div>
            </div>
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
