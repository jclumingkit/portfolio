import './styles.css';
import keys from './emailKeys';

import { useRef, useState } from 'react';
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
    const sendBtn = useRef(null)

    const handleFormData = (e) => {
        e.preventDefault();

        // disable send button while waiting for server response, and update Send to Sending
        setMessageInvalid(true);
        sendBtn.current.innerText = 'Sending';

        // send message to email
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

    const handleChangeInputBoxShadow = (element, onFocus) => {
        element.boxShadow = `5px 10px ${ onFocus ? '#D800A6' :  '#001054' }`; 
    }


    return(
        <Container
            className="section"
            ref={(ref) => refProps.current[2] = ref }    
        >
            <Row 
                className="
                    w-100 h-100
                    justify-content-center
                    p-3
                    p-md-5"
            >
                { 
                    isEmailSent ? 
                    <EmailSentMessage />
                    :
                    <motion.div 
                        xl={10}
                        className="
                            col
                            bg-goldenYellow
                            text-darkBlue
                            rounded-5
                            p-3
                            p-md-5
                            bs-dark"
                    >
                        <div
                            className="
                                bg-pastelGreen
                                text-darkBlue
                                rounded-5
                                mb-5
                                p-3
                                p-md-5
                                bs-dark"
                        >
                            <h3 className="text-center">
                                Thanks for taking your time to reach out.
                                What do you want to talk about?
                            </h3>
                        </div>
                        <Form 
                            onSubmit={(e => handleFormData(e))}
                            className="p-2"
                        >
                            <Row className="mb-3">
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
                                        onFocus={(e) => handleChangeInputBoxShadow(e.target.style, true)}
                                        onBlur={(e) => handleChangeInputBoxShadow(e.target.style, false)}
                                        className="p-3 bs-dark rounded-5"
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
                                        onFocus={(e) => handleChangeInputBoxShadow(e.target.style, true)}
                                        onBlur={(e) => handleChangeInputBoxShadow(e.target.style, false)}
                                        className="p-3 bs-dark rounded-5"
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
                                        onFocus={(e) => handleChangeInputBoxShadow(e.target.style, true)}
                                        onBlur={(e) => handleChangeInputBoxShadow(e.target.style, false)}
                                        className="p-3 bs-dark rounded-5"
                                    />
                                </Col>
                            </Row>
                            <Row className="mt-3">
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
                                        variant="contact" 
                                        type="submit"
                                        className="mt-2"
                                        disabled={messageInvalid}
                                        ref={sendBtn}
                                    >
                                        Send
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