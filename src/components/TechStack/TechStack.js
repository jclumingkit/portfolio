import './styles.css';
import techStacks from './data';

import { useRef } from 'react';
import { motion, useInView } from "framer-motion";
import { Container, Row, Col } from 'react-bootstrap';


export default function TechStack({refProps}) {
    const rowRef = useRef(null);
    const isInView = useInView(rowRef, { once: true });


    return(
        <Container
            className="p-3 p-md-5 section"
            ref={(ref) => refProps.current[1] = ref }
        >
            <Row 
                className="w-100 
                    h-100
                    align-items-center
                    justify-content-evenly"
                ref={rowRef}
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
                >
                    <h1 
                        className="text-darkBlue"
                        style={{ fontSize: "64px" }}
                    >
                        Tech <br /> Stack
                    </h1>
                </motion.div>
                <motion.div
                    className="
                        col
                        col-xl-6
                        d-flex
                        justify-content-center
                        gap-2
                        p-3"
                >
                    <Row className="w-100 justify-content-evenly">
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
                                        >
                                            {stack}
                                        </motion.div>
                                    </Col>
                                )
                            })

                        }
                    </Row>
                </motion.div>
            </Row>
        </Container>
    )
}