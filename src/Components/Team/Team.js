import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../Components/Footer";
import "./team.css";
const Team = () => {
    return (
        <>
            <div>
                <Container fluid className="team-main">
                    <h1 className="team-title">Our Respectable Team.</h1>
                </Container>
                <Container className="team-container">
                    <div className="team-members">
                        <div className="member">
                            <img
                                src="https://lavi.dexignzone.com/xhtml/images/team/pic1.jpg"
                                className="w-75 member-image"
                            ></img>
                            <h1 className="team-name">Joshua Weston</h1>
                            <p className="lead">MASSEUR</p>
                            <div className="member-icons">
                                <i class="fab fa-facebook-f icon-media"></i>
                                <i class="fab fa-twitter icon-media"></i>
                                <i class="fab fa-linkedin-in icon-media"></i>
                            </div>
                        </div>
                        <div className="member">
                            <img
                                src="https://lavi.dexignzone.com/xhtml/images/team/pic2.jpg"
                                className="w-75 member-image"
                            ></img>
                            <h1 className="team-name">Hackson Willingham</h1>
                            <p className="lead">HEAD MASSAGE</p>
                            <div className="member-icons">
                                <i class="fab fa-facebook-f icon-media"></i>
                                <i class="fab fa-twitter icon-media"></i>
                                <i class="fab fa-linkedin-in icon-media"></i>
                            </div>
                        </div>
                        <div className="member">
                            <img
                                src="https://lavi.dexignzone.com/xhtml/images/team/pic3.jpg"
                                className="w-75 member-image"
                            ></img>
                            <h1 className="team-name">Henry Hunter</h1>
                            <p className="lead">MASSEUR</p>
                            <div className="member-icons">
                                <i class="fab fa-facebook-f icon-media"></i>
                                <i class="fab fa-twitter icon-media"></i>
                                <i class="fab fa-linkedin-in icon-media"></i>
                            </div>
                        </div>
                        <div className="member mt-5 mb-5">
                            <img
                                src="https://lavi.dexignzone.com/xhtml/images/team/pic4.jpg"
                                className="w-75 member-image"
                            ></img>
                            <h1 className="team-name">James Logan</h1>
                            <p className="lead">HEAD MASSAGE</p>
                            <div className="member-icons">
                                <i class="fab fa-facebook-f icon-media"></i>
                                <i class="fab fa-twitter icon-media"></i>
                                <i class="fab fa-linkedin-in icon-media"></i>
                            </div>
                        </div>
                        <div className="member mt-5 mb-5">
                            <img
                                src="https://lavi.dexignzone.com/xhtml/images/team/pic5.jpg"
                                className="w-75 member-image"
                            ></img>
                            <h1 className="team-name">William Logan</h1>
                            <p className="lead">BODY MASSAGE</p>
                            <div className="member-icons">
                                <i class="fab fa-facebook-f icon-media"></i>
                                <i class="fab fa-twitter icon-media"></i>
                                <i class="fab fa-linkedin-in icon-media"></i>
                            </div>
                        </div>
                        <div className="member mt-5 mb-5">
                            <img
                                src="https://lavi.dexignzone.com/xhtml/images/team/pic6.jpg"
                                className="w-75 member-image"
                            ></img>
                            <h1 className="team-name">Oscar Weston</h1>
                            <p className="lead">FACE MASSAGE</p>
                            <div className="member-icons">
                                <i class="fab fa-facebook-f icon-media"></i>
                                <i class="fab fa-twitter icon-media"></i>
                                <i class="fab fa-linkedin-in icon-media"></i>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Team;
