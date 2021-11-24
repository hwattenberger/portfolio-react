import React, {useState} from 'react';
import { motion } from 'framer-motion'

import './App.css';
// import Projects from './components/Projects';
// import MainProject from './components/MainProject';
// import LandingTop from './components/LandingTop';
import LandingTop2 from './components/LandingTop2';
import AboutMe from './components/AboutMe';

// import noriBoxLg from './images/nori-box.png'
// import noriBoxSm from './images/nori-box-128.png'
// import Test from './Test';

import Project1 from './components/projects/Project1';
import Project2 from './components/projects/Project2';
import Project4 from './components/projects/Project4';
// import Parallax from './Parallax';

// const transition = { duration: 2, ease: [.6, .01, .23, .96]};

const projectVariants = {
  offscreen: {
    y: 80
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: .6,
      duration: 1
    }
  }
}

const projectsList = [<Project1/>, <Project2/>, <Project4/>]
const additionalProjects = [{title: "This Portfolio Site!", tools: ["React", "Framer Motion", "Tailwind"], links: [{name: "Github", url:"https://github.com/hwattenberger/portfolio-react"}], description: "Hope you like this site! Played with different framer motion options like parallax and transitions."}, 
{title: "Spotify Playlist Creator", tools: ["React", "Spotify APIs"], links: [{name: "Github", url:"https://github.com/hwattenberger/make_spotify_playlist"}, {name: "View Workflow", url:"/images/SpotifyProject2.gif"}], description: "Create a Spotify playlist off of recommendations based on up to 5 tracks of your choice.  Choose from your recently played top songs or search for any other track you'd like. This uses the Spotify APIs."}, 
{title: "Substring KMT Search", tools: ["React", "Redux", "Tailwind"], links: [{name: "Github", url:"https://github.com/hwattenberger/kmp-pattern-search"}, {name: "View Site", url:"https://hwattenberger-kmt-search.netlify.app/"}], description: "This is a fun little React app that helps visualize what happens in a substring search using the KMT algorithm (Knuth-Morris-Pratt algorithm). Built to test out tailwind and Redux (which is not needed for an app of this scale but used for practice)."}]


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
          <h2 className="text-3xl p-2 ml-14 mt-6 z-10">Selected Projects</h2>
          {projectsList.map((project, ix)=> (
            <motion.div className="mx-auto my-4 w-11/12 rounded p-2" key={ix}>
            {project}
            </motion.div>
          ))}
          <h2 className="text-3xl p-2 ml-14 mt-6">Additional Projects</h2>
          <div className="flex justify-center">
            <div className="flex flex-col items-center md:flex-row w-10/12 p-4 m-4 rounded">
              {additionalProjects.map((project, projectIx)=>(
                <motion.div className="flex flex-col w-full h-full md:w-1/3 bg-blue-300 rounded m-2 p-4" initial="offscreen" whileInView="onscreen" variants={projectVariants} key={projectIx}>
                  <h3 className="text-xl m-1">{project.title}</h3>
                  <div className="box-border w-full flex flex-wrap">
                    {project.tools.map((tool, toolIx)=>(
                    <span className="bg-gray-400 m-1 px-2 py-1 rounded" key={toolIx}>
                        {tool}
                    </span>
                    ))}
                  </div>
                  <div className="m-1">{project.description}</div>
                  <div className="box-border w-full flex flex-wrap mt-auto">
                    {project.links.map((tool, toolIx)=>(
                    <span className="bg-blue-400 m-1 px-2 py-1 rounded" key={toolIx}>
                        <a href={tool.url} target="_blank" rel="noreferrer"><button>{tool.name}</button></a>
                    </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div id="aboutMe" className="flex flex-col items-center justify-center bg-purple-300">
          <AboutMe/>
        </div>
      </main>
    </div>
  );
}

export default App;
