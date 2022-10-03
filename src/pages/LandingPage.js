import { useRef } from 'react';
import { Container } from 'react-bootstrap';

// Components
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';

// Utils
import BackToTopButton from '../components/Utils/BackToTopButton/BackToTopButton';
import ScrollYProgress from '../components/Utils/ScrollYProgress/ScrollYProgress';

function LandingPage() {
    const sectionRef = useRef([]);

    return (
        <Container className="mx-auto">
            <Hero refProps={sectionRef} />
            <Projects refProps={sectionRef} />


            <BackToTopButton />
            <ScrollYProgress />
        </Container>
    );
}

export default LandingPage;
