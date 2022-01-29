import React from "react";
import "./footer.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../Images/Group 33092.png";
const Footer = () => {
    return (
        <div
            style={{
                backgroundColor: "#f63e7b",
                width: "100%",
                height: "40vh",
            }}
        >
            <Container
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4,1fr)",
                    position: "relative",
                    top: "30px",
                }}
                className="mother-footer"
            >
                {/* 1 */}
                <div className="organized-logo">
                    <img src={Logo}></img>
                    <div>
                        <div className="social-icons">
                            <i className="fab fa-facebook-square"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-linkedin"></i>
                            <i className="fab fa-youtube"></i>
                        </div>
                    </div>
                </div>
                {/* 2 */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                    }}
                >
                    <i className="fas fa-map-marker-alt me-3"></i>
                    <p className="lead">
                        H#000 (0th Floor). Road #00. New DOHS, Mohakhali, Dhaka,
                        Bangladesh.
                    </p>
                </div>
                {/* 3 */}
                <div className="footer-links">
                    <h4 className="fw-bold text-center mb-4">Company</h4>
                    <Link to="/ourportfolio" className="link">
                        <p className="text-center lead ">Our Portfolio</p>
                    </Link>
                    <Link to="/team" className="link">
                        <p className="text-center lead link">Our Team</p>
                    </Link>
                    <Link to="/newsblogs" className="link">
                        <p className="text-center lead link">News & Blogs</p>
                    </Link>
                    <Link to="/price" className="link">
                        <p className="text-center lead link">Prices</p>
                    </Link>
                    <Link to="/terms" className="link">
                        <p className="text-center lead link">
                            Terms & Conditions
                        </p>
                    </Link>
                </div>
                {/* 4 */}
                <div>
                    <h4 className="fw-bold text-center mb-4">Quick Links</h4>
                    <p className="text-center lead">Quick Links</p>
                    <p className="text-center lead">Rentals</p>
                    <p className="text-center lead">Sales</p>
                    <p className="text-center lead">Contact</p>
                    <p className="text-center lead">Our Blog</p>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
