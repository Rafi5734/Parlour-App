import React from "react";
import { Container, Form } from "react-bootstrap";
import "./contactUs.css";
const ContactUs = () => {
    return (
        <Container fluid className="contact-main">
            <Container>
                <p
                    className="text-center"
                    style={{
                        color: "white",
                        fontSize: "1.3rem",
                        fontFamily: "Sedgwick Ave",
                    }}
                >
                    Welcome To Jerin Parlour
                </p>
                <h1
                    className="text-center"
                    style={{
                        color: "white",
                        fontSize: "3.3rem",
                        fontFamily: "Sedgwick Ave",
                    }}
                >
                    CONTACT US
                </h1>
                <Container>
                    <>
                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="floatingInputCustom"
                                type="text"
                                placeholder="name@example.com"
                                className="form-email"
                            />
                            <label
                                htmlFor="floatingInputCustom"
                                style={{ color: "white" }}
                                className="lead"
                            >
                                Name
                            </label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="floatingPasswordCustom"
                                type="password"
                                placeholder="Password"
                                className="form-email"
                            />
                            <label
                                htmlFor="floatingPasswordCustom"
                                style={{ color: "white" }}
                                className="lead"
                            >
                                Company
                            </label>
                        </Form.Floating>
                        <Form.Floating>
                            <Form.Control
                                id="floatingPasswordCustom"
                                type="email"
                                placeholder="Password"
                                className="form-email"
                            />
                            <label
                                htmlFor="floatingPasswordCustom"
                                style={{ color: "white" }}
                                className="lead"
                            >
                                Email*
                            </label>
                        </Form.Floating>
                    </>
                    <button className="btn-submit mt-5 lead">Send</button>
                </Container>
            </Container>
        </Container>
    );
};

export default ContactUs;
