import { Container } from 'react-bootstrap';


import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';

function LandingPage() {

    return (
        <Container fluid={true}>
            <Hero />
            <Projects />
        </Container>
    );
}

export default LandingPage;
