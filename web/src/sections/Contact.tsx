import { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import contact from "../img/contact.jpg"

import "./Contact.css"

export default function Contact() {

    const styleContact = {
        backgroundImage: `url(${contact})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    };

    const [message, setMessage] = useState<string>("");

    return (
        <div className="contact-section" style={styleContact}>
            <Row >
                <Col xs={12} md={{ span: 6, offset: 3 }}>
                    <Card className="contact-card" body>
                        <Row>
                            <Col >
                                <h2>Contact me</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control as="textarea" rows={4} placeholder="Message" value={message} onChange={(val: React.ChangeEvent<HTMLInputElement>) => {
                                            setMessage(val.target.value);
                                        }} />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Send
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>


        </div>

    );
}