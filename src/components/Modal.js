import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion'

const Modal = ({children, title, showModal, setShowModal}) => {

    const onClickTurnOff = (e) => {
        setShowModal(false);
    }

    if (!showModal) return null;

    return (
        <AnimatePresence>
            <motion.div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-20" onClick={onClickTurnOff} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                <motion.div className="relative top-20 md:mx-auto md:w-9/12 w-full mx-2 p-5 shadow-lg rounded bg-white" onClick={(e)=>e.stopPropagation()}
                    initial={{y:20, opacity: 0}} animate={{y:0, opacity: 1, transition: {delay: .5}}} exit={{x:50, opacity: 0, transition: {delay: 1, duration: 2}}}>
                    <div>
                        <div className="text-2xl mb-4">{title}</div>
                        <div className="absolute top-4 right-4 cursor-pointer" onClick={onClickTurnOff}>X</div>
                    </div>
                    {children}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

export default Modal;