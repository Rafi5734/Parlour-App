import React from "react";
import { Container } from "react-bootstrap";
import "./ourPortfolio.css";
import PropTypes from "prop-types";
import ButtonUnstyled, {
    buttonUnstyledClasses,
} from "@mui/base/ButtonUnstyled";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
// import Button from "@mui/material/Button";
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

const ButtonRoot = React.forwardRef(function ButtonRoot(props, ref) {
    const { children, ...other } = props;

    return (
        <svg width="150" height="50" {...other} ref={ref}>
            <polygon points="0,50 0,0 150,0 150,50" className="bg" />
            <polygon points="0,50 0,0 150,0 150,50" className="borderEffect" />
            <foreignObject x="0" y="0" width="150" height="50">
                <div className="content">{children}</div>
            </foreignObject>
        </svg>
    );
});

ButtonRoot.propTypes = {
    children: PropTypes.node,
};

const CustomButtonRoot = styled(ButtonRoot)(
    ({ theme }) => `
  overflow: visible;
  cursor: pointer;
  --main-color: ${
      theme.palette.mode === "light" ? "rgb(25,118,210)" : "rgb(144,202,249)"
  };
  --hover-color: ${
      theme.palette.mode === "light"
          ? "rgba(25,118,210,0.04)"
          : "rgba(144,202,249,0.08)"
  };
  --active-color: ${
      theme.palette.mode === "light"
          ? "rgba(25,118,210,0.12)"
          : "rgba(144,202,249,0.24)"
  };

  & polygon {
    fill: transparent;
    transition: all 800ms ease;
    pointer-events: none;
  }
  
  & .bg {
    stroke: var(--main-color);
    stroke-width: 0.5;
    filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1));
    fill: transparent;
  }

  & .borderEffect {
    stroke: var(--main-color);
    stroke-width: 2;
    stroke-dasharray: 150 600;
    stroke-dashoffset: 150;
    fill: transparent;
  }

  &:hover,
  &.${buttonUnstyledClasses.focusVisible} {
    .borderEffect {
      stroke-dashoffset: -600;
    }

    .bg {
      fill: var(--hover-color);
    }
  }

  &:focus,
  &.${buttonUnstyledClasses.focusVisible} {
    outline: none;
  }

  &.${buttonUnstyledClasses.active} { 
    & .bg {
      fill: var(--active-color);
      transition: fill 300ms ease-out;
    }
  }

  & foreignObject {
    pointer-events: none;

    & .content {
      font-family: Helvetica, Inter, Arial, sans-serif;
      font-size: 14px;
      font-weight: 200;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--main-color);
      text-transform: uppercase;
    }

    & svg {
      margin: 0 5px;
    }
  }`
);

const SvgButton = React.forwardRef(function SvgButton(props, ref) {
    return <ButtonUnstyled {...props} component={CustomButtonRoot} ref={ref} />;
});

//custom functions for

const buttonHandle = () => {
    console.log("clicked");
};

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
            <Container fluid className="mt-5 mb-5 main-jonathan">
                <Container className="second-jonathan">
                    <img
                        src="https://lavi.dexignzone.com/xhtml/images/testimonials/pic2.jpg"
                        className="jonathan-image"
                    ></img>
                    <h2 className="mt-5 mb-3 jonathan-name-first">
                        Jonathan Blair
                    </h2>
                    <p className="lead spa">Spa Owner</p>
                    <p className="lead spa">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatem deleniti eos quaerat, facere distinctio alias
                        voluptatum tenetur, eum id, nulla maiores commodi nobis.
                        Explicabo ab enim possimus dignissimos odio distinctio.
                    </p>
                    <h1 className="mt-5 jonathan-second-name">
                        Jonathan Blair
                    </h1>
                </Container>
            </Container>
            <Container className="gallery-mother mb-5">
                <h1 className="text-center gallery-header">Gallery</h1>
                <div className="mt-5 buttons">
                    <SvgButton className="lead me-4" onClick={buttonHandle}>
                        All
                    </SvgButton>
                    <SvgButton className="lead me-4">Haircuts</SvgButton>
                    <SvgButton className="lead me-4">Coloring</SvgButton>
                    <SvgButton className="lead me-4">Makeup</SvgButton>
                    <SvgButton className="lead me-4">Massage</SvgButton>
                    <SvgButton className="lead me-4">Highlights</SvgButton>
                </div>
                <div className="mother-gallery">
                    <div className="gallery-main mt-5 mb-5">
                        <div className="gallery-second">
                            <Card sx={{ maxWidth: 1000 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="450"
                                        image="https://lavi.dexignzone.com/xhtml/images/gallery/pic1.jpg"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="div"
                                        >
                                            Body Treatments
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            The daily grind can cause us to
                                            carry tension in our shoulders,
                                            necks, backs — even our legs! An
                                            authentic Thai massage can release
                                            this tension, as your massage
                                            therapist stretches, kneads, and
                                            unlocks your muscles. Micro
                                            treatments such as foot reflexology
                                            also signal your body to release
                                            itself from the stress inflicted by
                                            your mind.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button
                                        size="small"
                                        color="primary"
                                        variant="outlined"
                                    >
                                        Know More
                                    </Button>
                                </CardActions>
                            </Card>

                            <Card sx={{ maxWidth: 1000 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="450"
                                        image="https://lavi.dexignzone.com/xhtml/images/gallery/pic1.jpg"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="div"
                                        >
                                            Body Treatments
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            The daily grind can cause us to
                                            carry tension in our shoulders,
                                            necks, backs — even our legs! An
                                            authentic Thai massage can release
                                            this tension, as your massage
                                            therapist stretches, kneads, and
                                            unlocks your muscles. Micro
                                            treatments such as foot reflexology
                                            also signal your body to release
                                            itself from the stress inflicted by
                                            your mind.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button
                                        size="small"
                                        color="primary"
                                        variant="outlined"
                                    >
                                        Know More
                                    </Button>
                                </CardActions>
                            </Card>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default OurPortfolio;
