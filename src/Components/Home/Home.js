import React from "react";
import {  Container  } from "react-bootstrap";
import "./home.css";
import HeaderImage from "../Images/header-img.png";
import Button from "@mui/material/Button";
import AllServices from "../AllServices/AllServices";

const Home = () => {
    return (
        <>
            <div>
                <Container fluid className="home-main">
                    <Container>
                        <Container className="home-container">
                            <div className="header-description">
                                <div>
                                    <h1 className="main-header mt-5">
                                        BEAUTY SALON FOR EVERY WOMEN.
                                    </h1>
                                </div>
                                <div>
                                    <p className="lead">
                                        A beauty salon or beauty parlor is an
                                        establishment dealing with cosmetic
                                        treatments for men and women.There's a
                                        difference between a beauty salon and a
                                        beauty parlor which is that a beauty
                                        salon is a well developed space in a
                                        private location, usually having more
                                        features than a beauty parlor could
                                        have. Usually a beauty parlor
                                        concentrates on a specific treatment or
                                        beauty features such as styling either
                                        for men, women or for both. Also, a
                                        beauty parlor is a smaller and more
                                        community friendly place which is
                                        usually located at the owner's home.
                                    </p>
                                    <Button variant="outlined">
                                        Get Appointment
                                    </Button>
                                </div>
                            </div>
                            <div className="mt-5">
                                <img
                                    src={HeaderImage}
                                    className="img-fluid"
                                    alt="header-img"
                                ></img>
                            </div>
                        </Container>
                    </Container>
                </Container>
            </div>
            <AllServices></AllServices>
        </>
    );
};

export default Home;
