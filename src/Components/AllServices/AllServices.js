import React from "react";
import { Card, Container } from "react-bootstrap";
import "./allServices.css";
import firstImg from "../../Group 1372.png";
import MouthImg from "../../Mouth.png";
import FaceImg from "../../face.png";
import Button from "@mui/material/Button";
const AllServices = () => {
    return (
        <Container fluid>
            <Container>
                <div>
                    <h1
                        className="text-center mt-5 mb-5"
                        style={{
                            fontFamily: "Courier",
                            fontWeight: "bold",
                        }}
                    >
                        Our Awesome <span className="services">Services</span>
                    </h1>
                </div>
                <div className="main-services">
                    <div className="all-services">
                        <div>
                            <Card style={{ width: "22rem" }}>
                                <img
                                    src={firstImg}
                                    className="img-fluid"
                                    style={{
                                        width: "7rem",
                                        marginLeft: "auto",
                                        marginRight: "auto",
                                        marginTop: "30px",
                                    }}
                                />
                                <Card.Body>
                                    <Card.Title
                                        style={{ fontWeight: "bold" }}
                                        className="text-center"
                                    >
                                        Anti Age Face Treatment
                                    </Card.Title>
                                    <p
                                        className="text-center"
                                        style={{
                                            color: "#f63e7b",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        $199
                                    </p>
                                    <Card.Text className="lead">
                                        We craft stunning and amazing web UI
                                        using a well dramatic UX to fit your
                                        product.
                                    </Card.Text>
                                    <Button
                                        color="secondary"
                                        variant="outlined"
                                    >
                                        Know More
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card style={{ width: "22rem" }}>
                                <Card.Img
                                    variant="top"
                                    src={MouthImg}
                                    className="img-fluid"
                                    style={{
                                        width: "7rem",
                                        marginLeft: "auto",
                                        marginRight: "auto",
                                        marginTop: "30px",
                                    }}
                                />
                                <Card.Body>
                                    <Card.Title
                                        style={{ fontWeight: "bold" }}
                                        className="text-center"
                                    >
                                        Hair Color & Styling
                                    </Card.Title>
                                    <p
                                        className="text-center"
                                        style={{
                                            color: "#f63e7b",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        $99
                                    </p>
                                    <Card.Text className="lead">
                                        Amazing flyers, social media posts and
                                        brand representations that would make
                                        your brand stand out.
                                    </Card.Text>
                                    <Button
                                        color="secondary"
                                        variant="outlined"
                                    >
                                        Know More
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card style={{ width: "22rem" }}>
                                <Card.Img
                                    variant="top"
                                    src={FaceImg}
                                    className="img-fluid"
                                    style={{
                                        width: "7rem",
                                        marginLeft: "auto",
                                        marginRight: "auto",
                                        marginTop: "30px",
                                    }}
                                />
                                <Card.Body>
                                    <Card.Title
                                        style={{ fontWeight: "bold" }}
                                        className="text-center"
                                    >
                                        Skin Care Treatment
                                    </Card.Title>
                                    <p
                                        className="text-center"
                                        style={{
                                            color: "#f63e7b",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        $299
                                    </p>
                                    <Card.Text className="lead">
                                        With well written codes, we build
                                        amazing apps for all platforms, mobile
                                        and web apps in general.
                                    </Card.Text>
                                    <Button
                                        color="secondary"
                                        variant="outlined"
                                    >
                                        Know More
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </Container>
        </Container>
    );
};

export default AllServices;
