import { Container } from 'react-bootstrap';


import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';

function App() {
  return (
    <Container fluid>
      <Hero />
      <Projects />
    </Container>
  );
}

export default App;
