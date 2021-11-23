import { motion } from 'framer-motion'
import {useState} from 'react';

import Test from '../Test';

import noriBoxImg from '../images/nori-box-128.png';
import noriSittingImg from '../images/nori-sitting.png';

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
                    {/* <Test> */}
                    <div className="text-white text-left">
                        {!showNori && `const hilary = { firstName: 'Hilary', lastName: 'Wattenberger'};`}
                        {showNori && `const nori = { firstName: 'Nori', lastName: 'Wattenberger'};`}
                    </div>
                    {/* </Test> */}
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
                        <motion.div className="bg-gray-200 rounded-full w-10 cursor-pointer" 
                            whileHover={{scale: 1.1, rotate:-10, backgroundColor: "white"}} onClick={()=>setShowNori((noriState)=>!noriState)}
                            animate={{backgroundColor: showNori ? "#F9A8D4":"#E5E7EB"}}>
                            <img src={noriBoxImg} alt="show-cat"></img>
                        </motion.div>
                    </motion.div>
                    <motion.div className="w-12" variants={topToggles}>
                        <motion.div className="bg-gray-200 rounded-full w-10" whileHover={{scale: 1.1, rotate:10, backgroundColor: "white"}}>
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