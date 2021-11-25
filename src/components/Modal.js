import { motion, AnimatePresence } from 'framer-motion'

const Modal = ({children, title, showModal, setShowModal}) => {

    const onClickTurnOff = (e) => {
        setShowModal(false);
    }

    return (
        <AnimatePresence>
            {showModal &&
            <motion.div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-20" onClick={onClickTurnOff} initial={{opacity: 0}} exit={{opacity:0}} animate={{opacity: 1}} key="background">
                <motion.div className="relative box-border top-20 md:mx-auto md:w-10/12 mx-2 p-5 shadow-lg rounded bg-white" onClick={(e)=>e.stopPropagation()}
                    initial={{y:20, opacity: 0}} animate={{y:0, opacity: 1, transition: {delay: .5}}} exit={{y:50, opacity: 0, transition: {duration: 1}}} key="mainModal">
                    <div>
                        <div className="text-2xl mb-4">{title}</div>
                        <div className="absolute top-4 right-4 cursor-pointer text-2xl hover:text-red-700" onClick={onClickTurnOff}>X</div>
                    </div>
                    <div className="flex items-center justify-center">
                    {children}
                    </div>
                </motion.div>
            </motion.div>}
        </AnimatePresence>
    )
}

export default Modal;