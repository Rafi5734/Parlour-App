import React from "react";
import { Card, Container, Button } from "react-bootstrap";
import "./allServices.css";
import firstImg from "../../Group 1372.png";
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
                            <Card style={{ width: "18rem" }}>
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
                                    <Card.Title style={{ fontWeight: "bold" }}>
                                        Anti Age Face Treatment
                                    </Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the
                                        card title and make up the bulk of the
                                        card's content.
                                    </Card.Text>
                                    <Button variant="primary">
                                        Go somewhere
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card style={{ width: "18rem" }}>
                                <Card.Img
                                    variant="top"
                                    src="holder.js/100px180"
                                />
                                <Card.Body>
                                    <Card.Title style={{ fontWeight: "bold" }}>
                                        Hair Color & Styling
                                    </Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the
                                        card title and make up the bulk of the
                                        card's content.
                                    </Card.Text>
                                    <Button variant="primary">
                                        Go somewhere
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card style={{ width: "18rem" }}>
                                <Card.Img
                                    variant="top"
                                    src="holder.js/100px180"
                                />
                                <Card.Body>
                                    <Card.Title style={{ fontWeight: "bold" }}>
                                        Skin Care Treatment
                                    </Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the
                                        card title and make up the bulk of the
                                        card's content.
                                    </Card.Text>
                                    <Button variant="primary">
                                        Go somewhere
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
