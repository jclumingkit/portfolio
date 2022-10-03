import './styles.css';
import projects from './data';

import { useRef } from 'react';
import { motion, useInView } from "framer-motion";
import { Container, Row } from 'react-bootstrap';
import { BsFillArrowUpRightSquareFill } from 'react-icons/bs';

import animateCol from './animate';

export default function Projects({refProps}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return(
        <Container
            className="
                d-flex 
                flex-column 
                align-items-center 
                p-2
                p-md-5"
                ref={(ref) => refProps.current[0] = ref}
        >
            <Row 
                className="mb-3 
                    w-100 
                    justify-content-center"
            >
                <motion.div
                    className="col
                    d-flex
                    justify-content-center
                    align-items-center
                    bg-neonBlue
                    rounded-5"
                    style={{ height: "100px" }}
                    variants={animateCol(0)}
                    initial="hidden"
                    animate={ isInView ? 'show' : ''}
                >
                    <h1 className="text-darkBlue">Projects</h1>
                </motion.div> 
            </Row>

            <Row 
                className="w-100 
                d-flex
                flex-column
                gap-2
                align-items-center"
            >
                {   projects.map(({title, description, path, tech}, index) => {
                        return(
                            <motion.div
                                key={index}
                                ref={ref}
                                className="col
                                bg-darkBlue 
                                text-white 
                                rounded-5
                                p-5"
                                initial="hidden"
                                variants={animateCol(++index / 1.5)}
                                animate={ isInView ? 'show' : ''}
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
            </Row>
        </Container>
    )
}