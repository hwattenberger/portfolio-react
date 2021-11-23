import { motion } from 'framer-motion'

import Test from '../Test';

const transition = { duration: 5, ease: [.6, .01, -.05, .95]};


const LandingTop = () => {
    return (
        <>
            <motion.div className="h-screen flex items-center flex-col justify-center">
                <motion.div initial={{opacity: 0}} 
                            animate={{
                            opacity: 1,
                            transition: {delay: .3, ...transition}
                            }}>
                    {/* <p>Hi - I'm...</p> */}
                        <h1 className="text-4xl	font-bold m-6">
                            Hilary Wattenberger
                        </h1>
                    {/* <p class="">Thanks for visiting!  Take a look at some of the projects I've been working on recently.</p> */}
                </motion.div>
                <motion.div id="showCode" className="bg-gray-800 rounded m-4 p-4"
                initial={{y:-50}}
                animate={{
                            y:0,
                            transition: {delay: .1, type: "spring", bounce: .4, duration: 2.5}
                            }}>
                    <Test>
                    <div className="text-white text-left">
                    {`const hilary = {
                        firstName: 'Hilary',
                        lastName: 'Wattenberger'
                    }`}
                    </div>
                    </Test>
                </motion.div>
                {/* <p class="">Thanks for visiting!  Take a look at some of the projects I've been working on recently.</p> */}
            </motion.div>
            {/* <div className="h-1/3 bg-black w-full">
                    ""
            </div> */}
        </>
    )
}

export default LandingTop;