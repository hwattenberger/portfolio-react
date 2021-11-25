import { useState } from "react";
import Modal from "../Modal";
import { motion } from 'framer-motion';

import spotifyWorkflow from './../../images//SpotifyProject2.gif'

const additionalProjectList = [{title: "This Portfolio Site!", tools: ["React", "Framer Motion", "Tailwind"], links: [{name: "Github", url:"https://github.com/hwattenberger/portfolio-react"}], description: "Hope you like this site! I played with different framer motion options like parallax and transitions."}, 
{title: "Spotify Playlist Creator", tools: ["React", "Spotify APIs"], links: [{name: "Github", url:"https://github.com/hwattenberger/make_spotify_playlist"}, {name: "View Workflow", url:""}], description: "Created a Spotify playlist off of recommendations based on up to 5 tracks of your choice.  Choose from your recently played top songs or search for any other track you'd like. This uses the Spotify APIs."}, 
{title: "Substring KMT Search", tools: ["React", "Redux", "Tailwind"], links: [{name: "Github", url:"https://github.com/hwattenberger/kmp-pattern-search"}, {name: "View Site", url:"https://hwattenberger-kmt-search.netlify.app/"}], description: "This is a fun little React app that helps visualize what happens in a substring search using the KMT algorithm (Knuth-Morris-Pratt algorithm). Built to test out tailwind and Redux (which is not needed for an app of this scale but used for practice)."}]

const projectVariants = {
    offscreen: {
      y: 80,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: .6,
        duration: 1
      }
    }
  }

const AdditionalProjects = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <h2 className="text-3xl p-2 ml-14 mt-6">Additional Projects</h2>
            <div className="flex justify-center">
                <div className="flex flex-col items-center md:flex-row w-11/12 p-4 m-4 rounded">
                {additionalProjectList.map((project, projectIx)=>(
                    <motion.div className="flex flex-col w-full h-full md:w-1/3 bg-purple-100 rounded m-2 p-4" initial="offscreen" whileInView="onscreen" variants={projectVariants} key={projectIx} viewport={{once: true}}>
                    <h3 className="text-xl m-1">{project.title}</h3>
                    <div className="box-border w-full flex flex-wrap">
                        {project.tools.map((tool, toolIx)=>(
                        <span className="bg-blue-300 m-1 px-4 py-1 rounded" key={toolIx}>
                            {tool}
                        </span>
                        ))}
                    </div>
                    <div className="p-2">{project.description}</div>
                    <div className="box-border w-full flex flex-wrap mt-auto">
                        {project.links.map((tool, toolIx)=>(
                        <span className="bg-blue-400 m-1 px-2 py-1 rounded" key={toolIx}>
                            {tool.url==="" && <button onClick={()=>setShowModal(true)}>{tool.name}</button>}
                            {tool.url!=="" && <a href={tool.url} target="_blank" rel="noreferrer"><button>{tool.name}</button></a>}
                        </span>
                        ))}
                    </div>
                    </motion.div>
                ))}
                </div>
            </div>
            <div>
                <Modal title="Spotify Application - Example Workflow" showModal={showModal} setShowModal={setShowModal}><img src={spotifyWorkflow} alt="spotify application workflow diagram"></img></Modal>
            </div>
        </>
    )
}

export default AdditionalProjects