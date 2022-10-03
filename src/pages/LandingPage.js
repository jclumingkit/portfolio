import { useRef } from 'react';
import { Container } from 'react-bootstrap';

import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';

import BackToTopButton from '../components/Utils/BackToTopButton/BackToTopButton';

function LandingPage() {
    const sectionRef = useRef([]);

    return (
        <Container className="mx-auto">
            <Hero refProps={sectionRef} />
            <Projects refProps={sectionRef} />


            <BackToTopButton />
        </Container>
    );
}

export default LandingPage;
