import { AiFillCheckCircle } from 'react-icons/ai';
import { motion } from 'framer-motion';

export default function EmailSentMessage() {
    return(
        <motion.div
            className="
                text-center
                bg-darkBlue
                text-goldenYellow
                rounded-5
                p-5"
            initial={{  x: -100, opacity: 0  }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ 
                duration: 1.5,
                ease: 'easeIn',
                type: 'spring',
                stiffness: 50
             }}
        >
            <h1 className="text-pastelGreen"><AiFillCheckCircle size={72} /></h1>
            <h1>
                Your message is received. 
            </h1>
            <h2>I'll get back to you ASAP!</h2>
        </motion.div>
    )
}