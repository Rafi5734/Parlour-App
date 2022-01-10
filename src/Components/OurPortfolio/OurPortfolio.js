import React from "react";
import { Container } from "react-bootstrap";
import "./ourPortfolio.css";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: "#9e2e50",
    "&:hover": {
        backgroundColor: purple[700],
    },
}));

const OurPortfolio = () => {
    return (
        <>
            <div className="main-container">
                <Container className="portfolio-container">
                    <h1 className="portfolio-title">About Us</h1>
                </Container>
            </div>
            <div>
                <Container>
                    <h1 className="portfolio-beauty text-center">Beauty Spa</h1>
                </Container>
                <h1 className="under-portfolio-para text-center">ABOUT</h1>
            </div>

            <div className="mt-3">
                <Container className="portfolio-about-main">
                    <h1 className="ms-5 mb-5">About Us</h1>
                    <p className="ms-5 me-5 lead">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolor provident aliquam ea, temporibus velit, similique
                        cum illo sunt nulla, soluta tempora. Nisi, adipisci
                        eaque? Officia nihil iste dicta magnam temporibus?{" "}
                    </p>

                    <Stack spacing={2} direction="row">
                        <ColorButton
                            variant="contained"
                            className="ms-5 mt-3 lead"
                        >
                            Read More
                        </ColorButton>
                    </Stack>
                </Container>
            </div>
        </>
    );
};

export default OurPortfolio;
