import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactGA from 'react-ga';

import project1Img from './../../images/Scheduling App - Schedule.png'
import TextAnimation from '../TextAnimation';
import Parallax from '../../Parallax';
import Modal from '../Modal';

import img1 from './../../images/Scheduling App - Change People Needed.png'
import img2 from './../../images/Scheduling App - Create and update shifts.png'
import img3 from './../../images/Scheduling App - Register.png'
import img4 from './../../images/Scheduling App - Schedule.png'
import img5 from './../../images/Scheduling App - Request Time Off.png'
import img6 from './../../images/Scheduling App - Schedule.png'
import img7 from './../../images/Scheduling App - Specify Your Schedule.png'
import img8 from './../../images/Scheduling App - Update Staff Information.png'

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const tools = ["React", "NodeJS", "Express", "MongoDB"];

const sliderVariants = {
    enter: (direction) => {
      return {
        x: direction < 0 ? 100 : -100,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      transition: { delay: 1}
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction > 0 ? 100 : -100,
        opacity: 0
      };
    }
  };

const Project1 = () => {
    const [showModal, setShowModal] = useState(false);
    const [imgPage, setImgPage] = useState(0);
    const [direction, setDirection] = useState(0);

    const goLeft = () => {
        if (imgPage === 0) setImgPage(images.length-1);
        else setImgPage((page)=>page-1);
        setDirection(-1);
    }

    const goRight = () => {
        if (imgPage === images.length-1) setImgPage(0);
        else setImgPage((page)=>page+1);
        setDirection(1);
    }

    const turnOnModal = () => {
        ReactGA.event({category: 'Project 1', action: 'Click show modal'});
        setShowModal(true);
    }

    return (
        <>
            <div className="flex flex-col md:flex-row items-center">
                <div className="relative">
                    <div className="w-32 h-32 rounded-full bg-purple-300 absolute -top-12 -left-4"></div>
                    <Parallax>
                        <div className="bg-pink-600 p-2 rounded flex items-center justify-center cursor-pointer group" onClick={turnOnModal}>
                            <img src={project1Img} alt="project 1" className="z-0 hover:p-4 group-hover:opacity-80"/>
                            <div className="absolute z-10 opacity-0 group-hover:opacity-100 duration-300 font-medium text-lg">Click to see images</div>
                        </div>
                        <span className="italic">Click above</span>
                    </Parallax>
                    
                </div>
                <div className="ml-4">
                    <h2 className="text-2xl p-4"><TextAnimation>Shift Scheduling - MySchedule</TextAnimation></h2>
                    <div className="box-border w-full flex flex-wrap ml-3">
                        {tools.map((tool, toolIx)=>(
                        <span className="bg-blue-300 m-1 px-4 py-1 rounded" key={`tool-${toolIx}`}>
                            {tool}
                        </span>
                        ))}
                    </div>
                    <p className="p-4">This is a full stack MERN application geared towards restaurants that have many shift workers where 
                        availability could change throughout a week (students, part time workers, etc).  Staff specify their weekly
                        availability and time off requests.  Then the manager can create a schedule based on those inputs or copy
                        a schedule from the past week.
                    </p>
                    <p className="p-4">
                        Features include authentication (local or through Google), uploading profile pictures (using Cloudinary), 
                        and various admin tasks related to creating shifts & user roles & schedules.
                    </p>
                    <div className="ml-3">
                            <a href="https://hwattenberger-schedulingapp.netlify.app/" target="_blank" rel="noreferrer"><button className="bg-blue-400 m-1 px-2 py-1 rounded">View Site</button></a>
                            <a href="https://github.com/hwattenberger/scheduling_application" target="_blank" rel="noreferrer"><button className="bg-blue-400 m-1 px-2 py-1 rounded">Source Code</button></a>
                            <a href="/images/SchedulingAppDatabaseDiagram.html" target="_blank" rel="noreferrer"><button className="bg-blue-400 m-1 px-2 py-1 rounded">View Data Model</button></a>
                    </div>
                </div>
            </div>
            <div>
                <Modal title="Shift Scheduling Application - Pictures" showModal={showModal} setShowModal={setShowModal}>
                    <AnimatePresence custom={direction}>
                        <motion.img src={images[imgPage]} key={imgPage} variants={sliderVariants} custom={direction}
                            initial={"enter"} animate={"center"} exit={"exit"} transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 }}}/>
                        <div key={"Left arrow"} onClick={goLeft} className="bg-blue-300 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer absolute font-bold text-xl left-4 top-1/2 z-30">
                            <span>{"<"}</span>
                        </div>
                        <div key={"Right arrow"} onClick={goRight} className="bg-blue-300 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer absolute font-bold text-xl right-4 top-1/2 z-30">
                            {">"}
                        </div>
                    </AnimatePresence>
                </Modal>
            </div>
        </>
    )
}

export default Project1;