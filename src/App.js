import React, {useEffect} from 'react';
import { motion } from 'framer-motion';
import ReactGA from 'react-ga';

import './App.css';
import LandingTop2 from './components/LandingTop2';
import AboutMe from './components/AboutMe';

import Project1 from './components/projects/Project1';
import Project2 from './components/projects/Project2';
import Project4 from './components/projects/Project4';
import AdditionalProjects from './components/projects/AdditionalProjects';

// const transition = { duration: 2, ease: [.6, .01, .23, .96]};

ReactGA.initialize('UA-206079988-1');

const projectsList = [<Project1/>, <Project2/>, <Project4/>]

function App() {
  useEffect(()=> {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <div id="intro" className="h-screen flex items-center flex-col justify-center bg-purple-300 text-center">
          <LandingTop2/>
        </div>
        <div id="work" className="min-h-screen flex flex-col">
          <h2 className="text-3xl p-2 ml-14 mt-6 z-10">Selected Projects</h2>
          {projectsList.map((project, ix)=> (
            <motion.div className="mx-auto my-4 w-11/12 rounded p-2" key={ix}>
            {project}
            </motion.div>
          ))}
          <AdditionalProjects/>
        </div>
        <div id="aboutMe" className="flex flex-col items-center justify-center bg-purple-300">
          <AboutMe/>
        </div>
      </main>
    </div>
  );
}

export default App;
