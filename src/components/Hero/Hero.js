import './styles.css';

import { Container, Stack, Row } from 'react-bootstrap';
import { RiGitlabFill } from 'react-icons/ri';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { motion } from "framer-motion";


import { animateParent, animateChild } from './animateVariants'

export default function Hero({refProps}) {
    const handleScrollTo = (idx) => refProps.current[idx].scrollIntoView({ behavior: 'smooth' });

    return(
        <Container className="p-3 p-md-5 section"
        >
            <Row className="w-100 h-100">
                <motion.div
                    className="col
                        d-flex
                        flex-column
                        flex-lg-row
                        justify-content-center
                        align-items-center
                        gap-2"
                    variants={animateParent}
                    initial="hidden"
                    animate="show"
                >
                    <motion.div
                        className="module 
                            d-flex
                            flex-column
                            justify-content-between
                            p-3
                            p-xl-5
                            rounded-5
                            bg-darkBlue"
                        variants={animateChild}
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
                    </motion.div>

                    <div 
                    className="module 
                        d-flex
                        flex-column
                        gap-2"
                    >
                        <div className="h-50 
                            d-flex 
                            gap-2"
                        >
                            <motion.div
                                className="w-50 
                                    p-3
                                    rounded-5
                                    bg-neonBlue 
                                    text-darkBlue"
                                onClick={() => handleScrollTo(0)}
                                variants={animateChild}
                            >
                                <h4>PROJECTS</h4>
                            </motion.div>
                            <motion.div
                                className="w-50 
                                    p-3
                                    rounded-5
                                    bg-pastelGreen 
                                    text-darkBlue"
                                onClick={() => handleScrollTo(1)}
                                variants={animateChild}
                            >
                                <h4>TECH STACK</h4>
                            </motion.div>
                        </div>
                        <motion.div
                                className="h-50
                                    p-3
                                    rounded-5
                                    bg-goldenYellow 
                                    text-darkBlue"
                                onClick={() => handleScrollTo(2)}
                                variants={animateChild}
                        >
                            <h1 style={{ fontSize: "36px" }}>CONTACT ME</h1>
                        </motion.div>
                    </div>  
                </motion.div>
            </Row>
        </Container>
    )
}