import './styles.css';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';


export default function ContactForm({refProps}) {
    return(
        <Container
            className="p-3 p-md-5 section"
            ref={(ref) => refProps.current[2] = ref }    
        >
            <Row 
                className="
                    justify-content-center
                    bg-white
                    rounded-2"
            >
                <Col xl={10}>
                    <h1 className="text-center mb-5">
                        Thanks for taking your time to reach out.
                        What do you want to talk about?
                    </h1>
                    <Form className="p-2">
                        <Row>
                            <Col md={6}
                                className="p-2"
                            >
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" />
                            </Col>
                            <Col md={6}
                                className="p-2"
                            >
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" />
                            </Col>
                        </Row>
                        <Row>
                            <Col
                                className="p-2"
                            >
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={8} />
                            </Col>
                        </Row>
                        <Row>
                            <Col
                                className="
                                    d-flex
                                    justify-content-center
                                    align-items-center    
                                    p-2"
                            >
                                <Button 
                                    variant="primary" 
                                    type="submit"
                                    className="
                                        btn-contact
                                        mt-2"
                                >
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}