import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import OurPortfolio from "./Components/OurPortfolio/OurPortfolio";
import Team from "./Components/Team/Team";
import ContactUs from "./Components/ContactUs/ContactUs";
import {
    Container,
    Form,
    FormControl,
    Nav,
    NavDropdown,
    Navbar,
} from "react-bootstrap";
import Icon from "./Components/Images/Group 33092.png";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import Prices from "./Components/Prices/Prices";
import NewsBlogs from "./Components/News-Blogs/NewsBlogs";
import TermsConditions from "./Components/TermsConditions/TermsConditions";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar bg="light" expand="lg" sticky="top">
                    <Container>
                        <Navbar.Brand href="#">
                            <Link to="/home">
                                <img src={Icon} className="icon-img"></img>
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="ms-auto me-auto my-2 my-lg-0 my-navbar"
                                style={{ maxHeight: "100px" }}
                                navbarScroll
                            >
                                <Link to="/home" className="links me-5">
                                    Home
                                </Link>
                                <Link to="/ourportfolio" className="links me-5">
                                    Our Portfolio
                                </Link>
                                <Link to="/team" className="links me-5">
                                    Our Team
                                </Link>
                                <Link to="/price" className="links me-5">
                                    prices
                                </Link>
                                <Link to="/contact" className="links me-5">
                                    Contact Us
                                </Link>
                            </Nav>

                            <Button
                                variant="contained"
                                style={{ fontFamily: "Courier" }}
                            >
                                Log In
                            </Button>

                            {/* <Button variant="outline-success">Log In</Button> */}
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                {/* <Navbar></Navbar> */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route exact path="home" element={<Home />} />
                    <Route path="/ourportfolio" element={<OurPortfolio />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/price" element={<Prices />} />
                    <Route path="/newsblogs" element={<NewsBlogs />} />
                    <Route path="/terms" element={<TermsConditions />} />
                    {/* <Route path="" element={<ContactUs />} /> */}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
