import { motion, useViewportScroll, useTransform } from 'framer-motion'

const Test = ({children}) => {
    const { scrollY } = useViewportScroll()
    const y = useTransform(scrollY, [100, 200], [0, 500])

    return (
        <motion.div style={{ y }}>
            {children}
        </motion.div>
    )
}

export default Test;