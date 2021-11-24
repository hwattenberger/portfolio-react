import { motion, AnimatePresence } from "framer-motion";

// const letterVariants2 = {
//     before: {
//         opacity: 0,
//         y: 20,
//         transition: {
//             type: "spring",
//             damping: 12,
//             stiffness: 200
//         }
//       },
//     after: {
//         opacity: 1,
//         y: 0,
//         transition: {
//             type: "spring",
//             damping: 12,
//             stiffness: 200
//         }
//       }
// }

const letterVariants = {
    before: {
        y: 10,
        opacity: 0
    },
    after: {
        y: 0,
        opacity: 1,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: .5,
        }
      }
}

const letterContainerVariants = {
    after: {
        transition: {staggerChildren: .05, delayChildren: .2}
    },
}

const TextAnimation = ({children}) => {

    if (!children) return null;

    return (
        <AnimatePresence>
            <motion.span initial={"before"} whileInView={"after"} key={children} variants={letterContainerVariants}>
            {children.split("").map((letter, letterIx)=> (
                <motion.span key={letterIx} variants={letterVariants} style={{position: "relative", display: "inline-block"}}>
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
            </motion.span>
        </AnimatePresence>
    )
}

export default TextAnimation;