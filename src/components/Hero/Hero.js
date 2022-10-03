import './styles.css';

import { Stack } from 'react-bootstrap';
import { RiGitlabFill } from 'react-icons/ri';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { motion } from "framer-motion";

// functions
import animateDiv from './animate';

export default function Hero({refProps}) {
    const handleScrollTo = (idx) => refProps.current[idx].scrollIntoView({ behavior: 'smooth' });

    return(
        <div 
            className="hero-section 
                d-flex
                flex-column
                flex-md-row
                justify-content-center
                align-items-center
                gap-2"
            >
                <motion.div 
                    variants={animateDiv(0)}
                    initial="hidden"
                    animate="show"
                >
                    <div 
                    className="module 
                        d-flex
                        flex-column
                        justify-content-between
                        p-3
                        p-xl-5
                        rounded-5
                        bg-darkBlue"
                    >
                        <div className="text-goldenYellow">
                            <h1>hi, i'm jaycee</h1>
                            <p className="text-neonBlue">full stack web developer</p>
                        </div>
                        <div>
                            <Stack direction="horizontal" gap={3}>
                                <a href={`https://gitlab.com/lumingkit-juancarlos`}>
                                    <span className="text-pastelGreen">
                                        <RiGitlabFill size={32} />
                                    </span>
                                </a>
                                <a href={`https://www.linkedin.com/in/jclumingkit`}>
                                    <span className="text-pastelGreen">
                                        <BsLinkedin size={32} />
                                    </span>
                                </a>
                                <a href={`https://github.com/jclumingkit`}>
                                    <span className="text-pastelGreen">
                                        <BsGithub size={32} />
                                    </span>
                                </a>
                                
                                
                            </Stack>
                        </div>
                    </div>
                </motion.div>
            <div 
                className="module 
                    d-flex
                    flex-column
                    gap-2"
            >
                <div className="h-50 
                    d-flex gap-2"
                >
                    <motion.div
                        className="
                            w-50 
                            p-3
                            rounded-5
                            bg-neonBlue 
                            text-darkBlue
                        "
                        onClick={() => handleScrollTo(0)}
                        variants={animateDiv(0.75)}
                        initial="hidden"
                        animate="show"
                    >
                        <h4>PROJECTS</h4>
                    </motion.div>
                    <motion.div
                        className="
                            w-50 
                            p-3
                            rounded-5
                            bg-pastelGreen 
                            text-darkBlue
                        "
                        onClick={() => handleScrollTo(1)}
                        variants={animateDiv(1.25)}
                        initial="hidden"
                        animate="show"
                    >
                        <h4>SKILLS</h4>
                    </motion.div>
                </div>
                <motion.div
                        className="
                            h-50
                            p-3
                            rounded-5
                            bg-goldenYellow 
                            text-darkBlue
                        "
                        onClick={() => handleScrollTo(2)}
                        variants={animateDiv(1.75)}
                        initial="hidden"
                        animate="show"
                >
                    <h1 style={{ fontSize: "36px" }}>CONTACT ME</h1>
                </motion.div>
            </div>   
        </div>
    )
}