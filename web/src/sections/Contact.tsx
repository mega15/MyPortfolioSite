import React, {  useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import contact from "../img/contact.jpg"

import SendMsg from "../services/api"
import {successNotification} from "../services/notifications"

import "./Contact.css"

export default function Contact() {


    const styleContact = {
        backgroundImage: `url(${contact})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    };

    const [name, setName] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [email, setEmail] = useState<string>("");

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
                                    <Form.Group className="mb-3" controlId="formName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control placeholder="Name" value={name} onChange={(val: React.ChangeEvent<HTMLInputElement>) => {
                                            setName(val.target.value);
                                        }} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control placeholder="Email" value={email} onChange={(val: React.ChangeEvent<HTMLInputElement>) => {
                                            setEmail(val.target.value);
                                        }} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formTitle">
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control placeholder="Title" value={title} onChange={(val: React.ChangeEvent<HTMLInputElement>) => {
                                            setTitle(val.target.value);
                                        }} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formMessage">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control as="textarea" rows={4} placeholder="Message" value={message} onChange={(val: React.ChangeEvent<HTMLInputElement>) => {
                                            setMessage(val.target.value);
                                        }} />
                                    </Form.Group>

                                    <Button variant="primary" onClick={async () => {
                                        
                                        await SendMsg(name, title, email, message);
                                        setName("");
                                        setTitle("");
                                        setEmail("");
                                        setMessage("");

                                        successNotification("Message sent", "Your message have been sent, I will contact you as soon as possible");
                                    }}>
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