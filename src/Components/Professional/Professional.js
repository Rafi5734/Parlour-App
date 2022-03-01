import React from "react";
import { Container } from "react-bootstrap";
import faceWashing from "../../face-washing.png";
import Testimonials from "../Testimonials/Testimonials";
import "./pro.css";

const Professional = () => {
    return (
        <>
            <Container fluid className="pro-main">
                <Container className="the-pro">
                    <div>
                        <img src={faceWashing} className="img-fluid" alt="faceWash-img"></img>
                    </div>

                    <div className="pro-details">
                        <h1>
                            Let Us Handle Your Screen
                            <span className="pro-short"> Professionally</span>.
                        </h1>
                        <p className="pro-para lead">
                            With well written codes, we build amazing apps for
                            all platforms, mobile and web apps in general ipsum.
                        </p>
                        <Container className="inside-pro">
                            <div>
                                <h1 className="under-pro-para">100+</h1>
                                <p className="lead">Happy Customers</p>
                            </div>
                            <div>
                                <h1 className="under-pro-para">10+</h1>
                                <p className="lead">Total Services</p>
                            </div>
                        </Container>
                    </div>
                </Container>
            </Container>
            <Testimonials></Testimonials>
        </>
    );
};

export default Professional;
