import { motion, useViewportScroll, useTransform } from 'framer-motion'

const notes = new Array(20).fill("Yes")

const Transition = () => {
    const { scrollY } = useViewportScroll()
    const x = useTransform(scrollY, [100, 200], [0, -100])

    return (
        <motion.div className="flex -m-4" style={{ x }}>
            {notes.map((note) => (
                <span className="inline-block"><svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 376.217 376.217">
                <path d="M167.993,373.468c49.455-10.504,84.376-48.406,85.065-88.861c0.312-1.787,0.521-3.603,0.521-5.43V119.469
                    c15.894,5.965,32.765,10.277,39.514,14.773c4.929,3.288,8.062,7.789,10.066,12.201c3.647,8.061,6.376,17.318,9.959,19.508
                    c3.562,2.18,8.339,2.18,10.632,0c2.3-2.19,5.069-13.095,4.997-24.399c-0.044-5.707-0.265-12.553-0.817-20.442
                    c-1.88-26.277-22.526-51.311-53.191-61.949c-8.002-2.779-15.071-5.903-21.15-8.997V31.402C253.587,14.06,239.525,0,222.185,0
                    s-31.396,14.06-31.396,31.402v177.192c-17.725-5.182-37.758-6.163-58.178-1.831c-55.934,11.882-93.365,58.825-83.589,104.858
                    C58.792,357.651,112.065,385.342,167.993,373.468z"/>
                </svg></span>
            ))}
        </motion.div>
    )
}

export default Transition;