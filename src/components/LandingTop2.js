import { motion } from 'framer-motion';
import {useState} from 'react';
import ReactGA from 'react-ga';

import noriBoxImg from '../images/nori-box-128.png';
import resume from '../images/Hilary Wattenberger Resume.pdf'
// import noriSittingImg from '../images/nori-sitting.png';

const topToggles = {
    visible: {opacity: 1, scale: 1, transition: {duration: 1, type: "spring", bounce: .4}},
    hidden: {opacity: 0, scale: .5, transition: {duration: 1, type: "spring", bounce: .4}}
}

const topToggleContainer = {
    visible: {
        transition: {staggerChildren: 1, staggerDirection: -1, delayChildren: 3.4}
    },
}

const firstNameVariants = {
    active: {
        opacity: 1,
        scale: 1,
        transition: {delay: 2.6}
    },
    initial: {opacity: 0, scale: 0},
    activeOnScreen: {
        opacity: 1,
        scale: 1,
        transition: {delay: .1}
    },
}

const LandingTop2 = () => {
    const [showNori, setShowNori] = useState(false);
    const [initialLoad, setInitialLoad] = useState(true);

    const toggleNori = () => {
        ReactGA.event({category: 'Nori', action: 'Toggle'});
        setShowNori((currentNori)=>!currentNori);
    }

    return (
        <>
            <div className="h-screen flex items-center flex-col justify-center">
                <motion.div initial={"initial"} 
                            animate={initialLoad ? "active": "activeOnScreen"} 
                            key={showNori}
                            variants={firstNameVariants}
                            transition={{delay: 0}}>
                        <h1 className="text-4xl	font-bold m-4">
                            {!showNori ? "Hilary": "Nori"}
                        </h1>
                </motion.div>
                <motion.div id="showCode" className="bg-gray-800 rounded m-4 p-4"
                initial={{scale: 0}}
                animate={{scale: 1,
                        transition: {delay: .1, type: "spring", bounce: .4, duration: 2.5}}}>
                    <div className="text-white text-left">
                        {!showNori && `const hilary = { firstName: 'Hilary', lastName: 'Wattenberger'};`}
                        {showNori && `const nori = { firstName: 'Nori', lastName: 'Wattenberger'};`}
                    </div>
                </motion.div>
                <motion.div initial={{opacity: 0, scale: 0}} 
                            animate={{
                            opacity: 1,
                            scale: 1,
                            transition: {delay: 3}
                            }}>
                        <h1 className="text-4xl	font-bold m-4">
                            Wattenberger
                        </h1>
                </motion.div>
                <motion.div className="flex absolute top-0 right-0 m-2" initial={"hidden"} animate={"visible"} variants={topToggleContainer}
                    onAnimationComplete={()=>setInitialLoad(false)}>
                    <motion.div className="w-12" variants={topToggles}>
                        <motion.div className="bg-gray-200 rounded-full w-10" whileHover={{scale: 1.1, rotate:-20, backgroundColor: "#FFFFFF"}}>
                            <a href={resume} target="_blank" rel="noreferrer">
                            <svg className="w-10 p-px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480">
                                <path d="M413.648,74.336L341.664,2.352C340.216,0.896,338.216,0,336,0H104C81.944,0,64,17.944,64,40v344c0,22.056,17.944,40,40,40h88v56h16v-56h120c4.416,0,8-3.576,8-8v-40c0-14.88,10.216-27.432,24-30.984V416v64h16v-56c22.056,0,40-17.944,40-40V80C416,77.784,415.104,75.784,413.648,74.336z M344,27.312L388.688,72H344V27.312z M400,384c0,13.232-10.768,24-24,24v-72c0-4.424-3.584-8-8-8c-26.472,0-48,21.528-48,48v32H104c-13.232,0-24-10.768-24-24V40c0-13.232,10.768-24,24-24h224v64c0,4.424,3.584,8,8,8h64V384z"/>
                                <path d="M224,48H112c-4.416,0-8,3.576-8,8v112c0,4.424,3.584,8,8,8h32h48h32c4.416,0,8-3.576,8-8V56C232,51.576,228.416,48,224,48z M184,160h-32v-16c0-8.824,7.176-16,16-16c8.824,0,16,7.176,16,16V160z M160,104c0-4.416,3.592-8,8-8s8,3.584,8,8s-3.592,8-8,8S160,108.416,160,104z M216,160h-16v-16c0-10.488-5.136-19.72-12.952-25.56c3.064-4.032,4.952-9,4.952-14.44c0-13.232-10.768-24-24-24s-24,10.768-24,24c0,5.44,1.888,10.408,4.952,14.44C141.136,124.28,136,133.512,136,144v16h-16V64h96V160z"/>
                            </svg>
                            </a>
                        </motion.div>
                    </motion.div>
                    <motion.div className="w-12" variants={topToggles}>
                        <motion.div className="bg-gray-200 rounded-full w-10 cursor-pointer" 
                            whileHover={(showNori) ? {scale: 1.1, rotate:10, backgroundColor: "#F87171"}: {scale: 1.1, rotate:10, backgroundColor: "#FFFFFF"}} onClick={toggleNori}
                            animate={{backgroundColor: showNori ? "#F9A8D4":"#E5E7EB"}}>
                            <img src={noriBoxImg} alt="show-cat"></img>
                        </motion.div>
                    </motion.div>
                    <motion.div className="w-12" variants={topToggles}>
                        <motion.div className="bg-gray-200 rounded-full w-10" whileHover={{scale: 1.1, rotate:10, backgroundColor: "#FFFFFF"}}>
                            <a href="https://github.com/hwattenberger" target="_blank" rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-10" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                            </a>
                        </motion.div>
                    </motion.div>
                </motion.div>
                {/* <motion.div initial={{opacity: 0, scale: 0}} animate={showNori && {opacity: 1, scale: 1}}>
                    <img src={noriSittingImg} className="noriLanding"></img>
                </motion.div> */}
            </div>
        </>
    )
}

export default LandingTop2;