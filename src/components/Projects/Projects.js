import './styles.css';
import projects from './data';

import { useRef } from 'react';
import { motion, useInView } from "framer-motion";
import { Container, Row } from 'react-bootstrap';
import { BsFillArrowUpRightSquareFill } from 'react-icons/bs';

import { animateParent, animateChild } from './animateVariants';

export default function Projects({refProps}) {
    const colRef = useRef(null);
    const isInView = useInView(colRef, { once: true });

    return(
        <Container
            className="p-3 p-md-5"
            ref={(ref) => refProps.current[0] = ref }    
        >
            <Row className="h-100 my-auto"
            >
                <motion.div 
                    className="col
                        d-flex
                        flex-column
                        justify-content-center
                        gap-2"
                    variants={animateParent}
                    initial="hidden"
                    animate={ isInView ? "show" : "" }
                    ref={colRef}
                >
                    <motion.div
                        className="d-flex
                            justify-content-center
                            align-items-center
                            bg-neonBlue
                            rounded-5"
                        style={{ height: "100px" }}
                        variants={animateChild}
                    >
                        <h1 className="text-darkBlue">Projects</h1>
                    </motion.div> 

                    {   projects.map(({title, description, path, tech}, index) => {
                            return(
                                <motion.div
                                    key={index}
                                    className="
                                        bg-darkBlue 
                                        text-white 
                                        rounded-5
                                        p-5"
                                    variants={animateChild}
                                >
                                    <a href={path}>
                                        <h1 className="text-goldenYellow">
                                            {title} 
                                            <span className="text-neonBlue"> <BsFillArrowUpRightSquareFill /></span>
                                        </h1>
                                    </a>
                                    <ul className="mt-2">
                                        {   description.map((line, index) => {
                                                return(
                                                    <li key={index}>{line}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                    <h6 className="text-pastelGreen mt-2">{tech.join(", ")}</h6>
                                </motion.div>
                            )
                        })
                    }
                </motion.div>
            </Row>
        </Container>
    )
}