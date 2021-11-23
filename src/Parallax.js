import {useState, useRef, useLayoutEffect} from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion'

const Parallax = ({children, offset = 50}) => {
    const [elementTop, setElementTop] = useState(0);
    const [clientHeight, setClientHeight] = useState(0);
    const ref = useRef(null);

    const { scrollY } = useViewportScroll();

    const initial = elementTop - clientHeight;
    const final = elementTop + offset;

    const y = useTransform(scrollY, [initial, final], [offset, -offset]);

    useLayoutEffect(()=> {
        const ele = ref.current;
        const onResize = () => {
            setElementTop(ele.getBoundingClientRect().top + window.scrollY || window.pageYOffset);
            setClientHeight(window.innerHeight);
        };
        onResize();

        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize)
    }, [ref]);

    return (
        <motion.div ref={ref} style={{ y }}>
            {children}
        </motion.div>
    )
}

export default Parallax;