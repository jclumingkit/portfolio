import './styles.css';

import { Container, Stack, Row } from 'react-bootstrap';
import { RiGitlabFill } from 'react-icons/ri';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { motion } from "framer-motion";

import { animateContainer, animateParent, animateChild, animateTextParent, animateTextChild, animateSubtitle } from './animateVariants';

export default function Hero({refProps}) {
    const handleScrollTo = (idx) => refProps.current[idx].scrollIntoView({ behavior: 'smooth' });

    return(
        <Container className="p-3 p-md-5 section"
        >
            <Row
                className="w-100 h-100"
            >
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
                            bg-darkBlue
                            bs-pink
                            m-2"
                        variants={animateChild}
                    >
                        <motion.div 
                            className="text-goldenYellow"
                            variants={animateTextParent}
                            initial="hidden"
                            animate="show"
                        >
                            <h1 className="hero-title">
                                {
                                    [...`hi, i'm jaycee`].map((letter, idx) => {
                                        return(
                                            <motion.span 
                                                key={idx}
                                                variants={animateTextChild}
                                            >
                                                {letter}
                                            </motion.span>
                                        )
                                    })
                                }
                            </h1>
                            <motion.p 
                                className="text-neonBlue"
                                variants={animateTextChild}
                            >
                                full stack web developer
                            </motion.p>
                        </motion.div>
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
                        gap-3"
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
                                    text-darkBlue
                                    bs-dark"
                                onClick={() => handleScrollTo(0)}
                                variants={animateChild}
                            >
                                <motion.h4
                                    variants={animateSubtitle}
                                    whileHover="hover"
                                >
                                    PROJECTS
                                </motion.h4>
                            </motion.div>
                            <motion.div
                                className="w-50 
                                    p-3
                                    rounded-5
                                    bg-pastelGreen 
                                    text-darkBlue
                                    bs-dark"
                                onClick={() => handleScrollTo(1)}
                                variants={animateChild}
                            >
                                <motion.h4
                                    variants={animateSubtitle}
                                    whileHover="hover"
                                >
                                    TECH STACK
                                </motion.h4>
                            </motion.div>
                        </div>
                        <motion.div
                                className="h-50
                                    p-3
                                    rounded-5
                                    bg-goldenYellow 
                                    text-darkBlue
                                    bs-dark"
                                onClick={() => handleScrollTo(2)}
                                variants={animateChild}
                        >
                            <motion.h1
                                style={{ fontSize: "36px" }}
                                variants={animateSubtitle}
                                whileHover="hover"
                            >
                                CONTACT ME
                            </motion.h1>
                        </motion.div>
                    </div>  
                </motion.div>
            </Row>
        </Container>
    )
}