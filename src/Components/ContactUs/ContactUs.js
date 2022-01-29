import React from "react";
import { Container, Form } from "react-bootstrap";
import "./contactUs.css";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import Footer from "../Components/Footer";
const containerStyle = {
    width: "100%",
    height: "400px",
    marginTop: "50px",
    marginBottom: "50px",
};

const center = {
    lat: -3.745,
    lng: -38.523,
};
const ContactUs = () => {
    return (
        <>
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

                        <button class="slide_from_left mt-3 lead">Send</button>
                    </Container>
                </Container>
            </Container>
            <Container className="map-main">
                <LoadScript googleMapsApiKey="AIzaSyD8dMPRyH5KBmH_KfiS8zsu1DaeOtkZFgc">
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={10}
                    ></GoogleMap>
                </LoadScript>
            </Container>
            <Container fluid className="center">
                <Container>
                    <div className="main-center">
                        <div>
                            <h1 className="mb-5">
                                WELLNESS CENTER LOS ANGELES
                            </h1>
                            <p className="lead">Mon – Wed 10:00 – 21:00</p>
                            <p className="lead">Thu & Fri 12:00 – 20:00</p>
                            <p className="lead mb-5">Weekend 12:00 – 21:00</p>
                            <p className="lead address">
                                1525 Boardway Los Angels. CA 90015
                            </p>
                        </div>
                        <div>
                            <h1 className="mb-5">WELLNESS CENTER NEW JERSEY</h1>
                            <p className="lead">Mon – Wed 10:00 – 21:00</p>
                            <p className="lead">Thu & Fri 12:00 – 20:00</p>
                            <p className="lead mb-5">Weekend 12:00 – 21:00</p>
                            <p className="lead address">
                                401 - 827 Scott Rd Brielle. NJ 08730.
                            </p>
                        </div>
                        <div>
                            <h1 className="mb-5">WELLNESS CENTER CHICAGO</h1>
                            <p className="lead">Mon – Wed 10:00 – 21:00</p>
                            <p className="lead">Thu & Fri 12:00 – 20:00</p>
                            <p className="lead mb-5">Weekend 12:00 – 21:00</p>
                            <p className="lead address">
                                230 W Monreo St Chicago. IL 60606
                            </p>
                        </div>
                    </div>
                </Container>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default ContactUs;
