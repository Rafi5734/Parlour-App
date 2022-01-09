import React from "react";
import "./footer.css";
import { Container } from "react-bootstrap";
const Footer = () => {
    return (
        <div
            style={{
                backgroundColor: "#f63e7b",
                width: "100%",
                height: "30vh",
            }}
        >
            <Container
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4,1fr)",
                    position: "relative",
                    top: "30px",
                }}
            >
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
                <div>
                    <h4 className="fw-bold text-center mb-5">Company</h4>
                </div>
                <div>
                    <h4 className="fw-bold text-center mb-5">Quick Links</h4>
                </div>
                <div>
                    <h4 className="fw-bold text-center mb-5">About Us</h4>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
