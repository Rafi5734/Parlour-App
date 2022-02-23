import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import "./allServices.css";
import Button from "@mui/material/Button";
import Professional from "../Professional/Professional";
const AllServices = () => {
    const [service, setService] = useState([]);
    const [handleBtn, setHandleBtn] = useState(false);
    const [trueService, setTrueService] = useState([]);

    useEffect(() => {
        fetch("./services.json")
            .then((res) => res.json())
            .then((data) => {
                if (handleBtn === false) {
                    const slicingData = data.slice(0, 3);
                    return setService(slicingData);
                }
            });
    }, []);
    // console.log(trueService);
    const handleExploreMore = () => {
        setHandleBtn(true);
        fetch("./services.json")
            .then((res) => res.json())
            .then((data) => {
                setTrueService(data);
                // console.log(trueService);
            });
    };
    return (
        <>
            <Container fluid>
                <Container>
                    <div>
                        <h1
                            className="text-center mt-5 mb-5"
                            style={{
                                fontFamily: "'Montserrat', sans-serif",
                                fontWeight: "bold",
                            }}
                        >
                            Our Awesome{" "}
                            <span className="services">Services</span>
                        </h1>
                    </div>
                    <div className="main-services">
                        <div className="all-services">
                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(3, 1fr)",
                                    gridGap: "50px",
                                }}
                                className="all-services-cards ms-auto mt-5 mb-5"
                            >
                                {handleBtn ? (
                                    <div
                                        style={{
                                            display: "grid",
                                            gridTemplateColumns:
                                                "repeat(3, 1fr)",
                                            gridGap: "50px",
                                        }}
                                    >
                                        {trueService.map((service) => (
                                            <Card
                                                style={{ width: "22rem" }}
                                                key={service.title}
                                                className="a-card"
                                            >
                                                <img
                                                    src={service.image}
                                                    className="img-fluid"
                                                    alt="service-img"
                                                    style={{
                                                        width: "7rem",
                                                        marginLeft: "auto",
                                                        marginRight: "auto",
                                                        marginTop: "30px",
                                                    }}
                                                />
                                                <Card.Body>
                                                    <Card.Title
                                                        style={{
                                                            fontWeight: "bold",
                                                        }}
                                                        className="text-center"
                                                    >
                                                        {service.title}
                                                    </Card.Title>
                                                    <p
                                                        className="text-center"
                                                        style={{
                                                            color: "#f63e7b",
                                                            fontWeight: "bold",
                                                        }}
                                                    >
                                                        $
                                                        <span>
                                                            {service.price}
                                                        </span>
                                                    </p>
                                                    <Card.Text className="lead">
                                                        {service.description}
                                                    </Card.Text>
                                                    <Button
                                                        color="secondary"
                                                        variant="outlined"
                                                    >
                                                        Know More
                                                    </Button>
                                                </Card.Body>
                                            </Card>
                                        ))}
                                    </div>
                                ) : (
                                    <>
                                        <div
                                            style={{
                                                display: "grid",
                                                gridTemplateColumns:
                                                    "repeat(3, 1fr)",
                                                gridGap: "50px",
                                            }}
                                        >
                                            {service.map((t) => (
                                                <Card
                                                    style={{ width: "22rem" }}
                                                    key={t.title}
                                                    className="a-card"
                                                >
                                                    <img
                                                        src={t.image}
                                                        className="img-fluid"
                                                        alt="service-img"
                                                        style={{
                                                            width: "7rem",
                                                            marginLeft: "auto",
                                                            marginRight: "auto",
                                                            marginTop: "30px",
                                                        }}
                                                    />
                                                    <Card.Body>
                                                        <Card.Title
                                                            style={{
                                                                fontWeight:
                                                                    "bold",
                                                            }}
                                                            className="text-center"
                                                        >
                                                            {t.title}
                                                        </Card.Title>
                                                        <p
                                                            className="text-center"
                                                            style={{
                                                                color: "#f63e7b",
                                                                fontWeight:
                                                                    "bold",
                                                            }}
                                                        >
                                                            $
                                                            <span>
                                                                {t.price}
                                                            </span>
                                                        </p>
                                                        <Card.Text className="lead">
                                                            {t.description}
                                                        </Card.Text>
                                                        <Button
                                                            color="secondary"
                                                            variant="outlined"
                                                        >
                                                            Know More
                                                        </Button>
                                                    </Card.Body>
                                                </Card>
                                            ))}
                                            <Button
                                                variant="outlined"
                                                color="error"
                                                style={{
                                                    marginBottom: "50px",
                                                    position: "relative",
                                                    left: "0px",
                                                }}
                                                onClick={handleExploreMore}
                                            >
                                                Explore More
                                            </Button>
                                        </div>
                                    </>
                                )}

                                {/*  */}
                            </div>
                        </div>
                    </div>
                </Container>
            </Container>
            <Professional></Professional>
        </>
    );
};

export default AllServices;
