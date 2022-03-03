import React from "react";
import { Badge, Container } from "react-bootstrap";
import "./prices.css";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
const Prices = () => {
    return (
        <>
            <div>
                <Container fluid className="pricing-main">
                    <h1 className="pricing-title">Pricing</h1>
                </Container>
                <Container className="mt-5 mb-5 pricing-second">
                    <h1 className="Price-title text-center">
                        OUR <span className="price-price">PRICE</span>
                    </h1>

                    <div className="pricing-table-second mt-5">
                        <div className="columns">
                            <ul className="price">
                                <li className="header">Starter</li>
                                <li className="grey fw-bold">$ 19/MONTH</li>
                                <li className="lead">Hair Style</li>
                                <li
                                    style={{ backgroundColor: "#eeeeee" }}
                                    className="lead"
                                >
                                    Hair Brush
                                </li>
                                <li className="lead">Corner Lashes</li>
                                <li
                                    style={{ backgroundColor: "#eeeeee" }}
                                    className="lead"
                                >
                                    Eye Brows
                                </li>
                                <li className="lead">Eye Liner</li>
                                <li
                                    style={{ backgroundColor: "#eeeeee" }}
                                    className="lead"
                                >
                                    Body Masssage
                                </li>
                                <li className="grey lead">
                                    <Link to="/registration" className="button">
                                        Get Services
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <h4>
                            <Badge bg="secondary">Recommended</Badge>
                        </h4>
                        <div className="columns" style={{ marginTop: "-35px" }}>
                            <ul className="price">
                                <li className="header">Basic</li>
                                <li className="grey-m fw-bold">$ 30/MONTH</li>
                                <li className="lead">Hair Style</li>
                                <li
                                    style={{ backgroundColor: "#eeeeee" }}
                                    className="lead"
                                >
                                    Hair Brush
                                </li>
                                <li className="lead">Corner Lashes</li>
                                <li
                                    style={{ backgroundColor: "#eeeeee" }}
                                    className="lead"
                                >
                                    Eye Brows
                                </li>
                                <li className="lead">Eye Liner</li>
                                <li
                                    style={{ backgroundColor: "#eeeeee" }}
                                    className="lead"
                                >
                                    Body Masssage
                                </li>
                                <li className="grey lead">
                                    <Link to="/registration" className="button">
                                        Get Services
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="columns" style={{ marginTop: "-38px" }}>
                            <ul className="price">
                                <li className="header">Premium</li>
                                <li className="grey fw-bold">$ 60/MONTH</li>
                                <li className="lead">Hair Style</li>
                                <li
                                    style={{ backgroundColor: "#eeeeee" }}
                                    className="lead"
                                >
                                    Hair Brush
                                </li>
                                <li className="lead">Corner Lashes</li>
                                <li
                                    style={{ backgroundColor: "#eeeeee" }}
                                    className="lead"
                                >
                                    Eye Brows
                                </li>
                                <li className="lead">Eye Liner</li>
                                <li
                                    style={{ backgroundColor: "#eeeeee" }}
                                    className="lead"
                                >
                                    Body Masssage
                                </li>
                                <li className="grey lead">
                                    <Link to="/registration" className="button">
                                        Get Services
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Prices;
