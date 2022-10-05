import './styles.css';
import techStacks from './data';

import { useRef } from 'react';
import { motion, useInView } from "framer-motion";
import { Container, Col } from 'react-bootstrap';

import { animateParent, animateChild, animateParent2, animateChild2 } from './animateVariants';

export default function TechStack({refProps}) {
    const colRef = useRef(null);
    const isInView = useInView(colRef, { once: true });


    return(
        <Container
            className="p-3 p-md-5 section"
            ref={(ref) => refProps.current[1] = ref }
        >
            <motion.div 
                className="
                    row
                    w-100 
                    h-100
                    align-items-center
                    justify-content-evenly"
                variants={animateParent}
                initial="hidden"
                animate={ isInView ? "show" : "" }
                ref={colRef}
                
            >
                <motion.div 
                    className="
                        col-12
                        col-md-4
                        d-flex
                        align-items-center
                        bg-pastelGreen
                        p-3
                        rounded-5"
                    style={{ height: "300px" }}
                    variants={animateChild}
                   
                >
                    <h1 
                        className="text-darkBlue"
                        style={{ fontSize: "64px" }}
                    >
                        Tech <br /> Stack
                    </h1>
                </motion.div>
                <Col xl={6}
                    className="
                        d-flex
                        justify-content-center
                        gap-2
                        p-3"
                >
                    <motion.div 
                        className="
                            row
                            w-100 
                            justify-content-evenly"
                        variants={animateParent2}
                        initial="hidden"
                        animate={ isInView ? "show" : "" }
                    >
                        { 
                            techStacks.map((stack, idx) => {
                                return(
                                    <Col 
                                        xs={6}
                                        md={3}
                                        xl={3}
                                        key={idx}
                                        className="
                                            p-2
                                            d-flex
                                            justify-content-center"
                                    >
                                        <motion.div
                                            className="
                                                stack-container
                                                bg-darkBlue
                                                text-neonBlue
                                                rounded-3"
                                            variants={animateChild2}
                                        >
                                            {stack}
                                        </motion.div>
                                    </Col>
                                )
                            })

                        }
                    </motion.div>
                </Col>
            </motion.div>
        </Container>
    )
}