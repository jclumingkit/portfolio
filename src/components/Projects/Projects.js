import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsFillArrowUpRightSquareFill } from 'react-icons/bs';

import './styles.css';
import projects from './data';


export default function Projects({refProps}) {
    const [projectsData, setProjectsData] = useState('');

    function handleData() {
        setProjectsData(projects.map(({title, description, path, tech}, index) => {
            return(
                <Col
                    key={index}
                    className="bg-darkBlue 
                    text-white 
                    rounded-5
                    p-5"
                >
                    <a href={path}>
                        <h1 className="text-goldenYellow">
                            {title} 
                            <span className="text-neonBlue"> <BsFillArrowUpRightSquareFill /></span>
                        </h1>
                    </a>
                    <ul>
                        {   description.map((line, index) => {
                                return(
                                    <li key={index}>{line}</li>
                                )
                            })
                        }
                    </ul>
                    <h6 className="text-neonBlue">{tech.join(", ")}</h6>
                </Col>
            )
        }))
    }

    useEffect(() => {
        handleData();
    }, [])

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
                <Col
                    className="d-flex
                    justify-content-center
                    align-items-center
                    bg-neonBlue
                    rounded-5"
                    style={{ height: "100px" }}
                >
                    <h1 className="text-pink">Projects</h1>
                </Col>
            </Row>
            <Row 
                className="w-100 
                d-flex
                flex-column
                gap-2
                align-items-center"
            >
                {projectsData}
            </Row>
        </Container>
    )
}