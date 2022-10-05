import './styles.css';
import keys from './emailKeys';

import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { send } from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";
import { motion } from 'framer-motion';

import EmailSentMessage from '../Utils/EmailSentMessage/EmailSentMessage';


export default function ContactForm({refProps}) {
    const [formData, setFormData] = useState({
        senderName: '',
        senderEmail: '',
        senderMessage: ''
    });
    const [isEmailSent, setIsEmailSent] = useState(false);
    const [messageInvalid, setMessageInvalid] = useState(true);

    const handleFormData = (e) => {
        e.preventDefault();

        send(
            keys.serviceID,
            keys.templateID,
            formData,
            keys.userID
        )
        .then((response) => {
            if (response.status === 200) {
                setIsEmailSent(true)
            }
        })
        .catch((err) => {
            console.log('FAILED...', err);
        });
    }


    return(
        <Container
            className="
                p-3 
                p-md-5 
                section"
            ref={(ref) => refProps.current[2] = ref }    
        >
            <Row 
                className="
                    justify-content-center
                    bg-white
                    rounded-5
                    p-3
                    p-md-5
                    border-goldenYellow"
            >
                { 
                    isEmailSent ? 
                    <EmailSentMessage />
                    :
                    <motion.div 
                        xl={10}
                        className="col rounded-5"
                    >
                        <h1 className="text-center mb-5">
                            Thanks for taking your time to reach out.
                            What do you want to talk about?
                        </h1>
                        <Form 
                            onSubmit={(e => handleFormData(e))}
                            className="p-2"
                        >
                            <Row>
                                <Col 
                                    md={6}
                                    className="p-2"
                                >
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        value={formData.senderName}
                                        required
                                        onChange={(e) => setFormData({...formData, senderName: e.target.value})}
                                        className="p-2"
                                    />
                                </Col>
                                <Col 
                                    md={6}
                                    className="p-2"
                                >
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control 
                                        type="email" 
                                        value={formData.senderEmail}
                                        required
                                        onChange={(e) => setFormData({...formData, senderEmail: e.target.value})}
                                        className="p-2"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col
                                    className="p-2"
                                >
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control 
                                        as="textarea" 
                                        rows={8} 
                                        value={formData.senderMessage}
                                        required
                                        onChange={(e) => setFormData({...formData, senderMessage: e.target.value})}
                                        className="p-2"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col
                                    className="
                                        d-flex
                                        flex-column
                                        justify-content-center
                                        align-items-center    
                                        p-md-2"
                                >
                                    <ReCAPTCHA
                                        sitekey="6LfAFFUiAAAAAC2ri1_TX2oHrzz1PPbgt6K0S51A"
                                        onChange={() => setMessageInvalid(false)}
                                    />
                                    <Button 
                                        variant="primary" 
                                        type="submit"
                                        className="
                                            btn-contact
                                            mt-2"
                                        disabled={messageInvalid}
                                    >
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </motion.div>
                }
            </Row>
        </Container>
    )
}