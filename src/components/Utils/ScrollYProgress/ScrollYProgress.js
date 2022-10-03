import './styles.css';
import { motion, useScroll } from "framer-motion";

function ScrollYProgress() {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div 
            className="progress-bar"
            style={{ scaleX: scrollYProgress }} 
        />  
    );
}

export default ScrollYProgress;
