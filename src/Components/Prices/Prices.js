import React from "react";
import { Container } from "react-bootstrap";
import "./prices.css";
import Footer from "../Components/Footer";
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
                                <li className="lead">10GB Storage</li>
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
                                    <a href="#" className="button">
                                        Sign Up
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="columns">
                            <ul className="price">
                                <li className="header">Starter</li>
                                <li className="grey-m fw-bold">$ 19/MONTH</li>
                                <li className="lead">10GB Storage</li>
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
                                    <a href="#" className="button">
                                        Sign Up
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="columns">
                            <ul className="price">
                                <li className="header">Starter</li>
                                <li className="grey fw-bold">$ 19/MONTH</li>
                                <li className="lead">10GB Storage</li>
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
                                    <a href="#" className="button">
                                        Sign Up
                                    </a>
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
