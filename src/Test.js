import { motion, useViewportScroll, useTransform } from 'framer-motion'

const Test = ({children}) => {
    const { scrollY, scrollX } = useViewportScroll()
    const y = useTransform(scrollY, [100, 200], [0, -100])
    const x = useTransform(scrollY, [100, 200], [0, -100])

    return (
        <motion.div style={{ y, x }}>
            {children}
        </motion.div>
    )
}

export default Test;