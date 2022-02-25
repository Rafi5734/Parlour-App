import React, {  useState } from "react";
import { Container } from "react-bootstrap";
import "./ourPortfolio.css";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
// import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";
import Footer from "../Components/Footer";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";
import UpIcon from "@mui/icons-material/KeyboardArrowUp";
import { green } from "@mui/material/colors";
import Box from "@mui/material/Box";
import All from "./All/All";
import Haircut from "./Haircut/Haircut";
import Coloring from "./Coloring/Coloring";
import Makeup from "./Makeup/Makeup";
import Massage from "./Massage/Massage";
import Highlight from "./Highlight/Highlight";


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


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`
  };
}


const fabStyle = {
  position: "absolute",
  bottom: 16,
  right: 16
};

const fabGreenStyle = {
  color: "common.white",
  bgcolor: green[500],
  "&:hover": {
    bgcolor: green[600]
  }
};



const OurPortfolio = () => {
    const theme = useTheme();
    const [value, setValue] = useState(0);
    
    const handleChange = (event, newValue) => {
    setValue(newValue);
    };
    
    const handleChangeIndex = (index) => {
    setValue(index);
    };
    
    const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
    };
    

    const fabs = [
    {
      color: "primary",
      sx: fabStyle,
      icon: <UpIcon />,
      label: "Add"
    },
    {
      color: "secondary",
      sx: fabStyle,
      icon: <UpIcon />,
      label: "Edit"
    },
    {
      color: "inherit",
      sx: { ...fabStyle, ...fabGreenStyle },
      icon: <UpIcon />,
      label: "Expand"
    }
    ];

    const upperBtnHandler = () => {
        console.log("clicked");
    }

    
    
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              provident aliquam ea, temporibus velit, similique cum illo sunt
              nulla, soluta tempora. Nisi, adipisci eaque? Officia nihil iste
              dicta magnam temporibus?{" "}
            </p>

            <Stack spacing={2} direction="row">
              <ColorButton variant="contained" className="ms-5 mt-3 lead">
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
              alt="jonathan-img"
            ></img>
            <h2 className="mt-5 mb-3 jonathan-name-first">Jonathan Blair</h2>
            <p className="lead spa">Spa Owner</p>
            <p className="lead spa">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem deleniti eos quaerat, facere distinctio alias
              voluptatum tenetur, eum id, nulla maiores commodi nobis. Explicabo
              ab enim possimus dignissimos odio distinctio.
            </p>
            <h1 className="mt-5 jonathan-second-name">Jonathan Blair</h1>
          </Container>
        </Container>
        <Container className="gallery-mother mb-5">
          <h1 className="text-center gallery-header">Gallery</h1>
          {/* <div className="mt-5 buttons">
            <SvgButton className="lead me-4" onClick={allButtonHandle}>
              All
            </SvgButton>
            <SvgButton className="lead me-4" onClick={hairCutButtonHandle}>
              Haircuts
            </SvgButton>
            <SvgButton className="lead me-4">Coloring</SvgButton>
            <SvgButton className="lead me-4">Makeup</SvgButton>
            <SvgButton className="lead me-4">Massage</SvgButton>
            <SvgButton className="lead me-4">Highlights</SvgButton>
          </div> */}
          <div className="mother-gallery">
            <div className="gallery-main mt-5 mb-5">
              <div className="gallery-second">
                <Box
                  sx={{
                    bgcolor: "background.paper",
                    width: 1500,
                    position: "relative",
                    minHeight: 200,
                  }}
                >
                  <AppBar position="static" color="default">
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      indicatorColor="primary"
                      textColor="primary"
                      variant="fullWidth"
                      aria-label="action tabs example"
                    >
                      <Tab label="All" {...a11yProps(0)} />
                      <Tab label="Haircuts" {...a11yProps(1)} />
                      <Tab label="Coloring" {...a11yProps(2)} />
                      <Tab label="Makeup" {...a11yProps(3)} />
                      <Tab label="Massage" {...a11yProps(4)} />
                      <Tab label="Highlights" {...a11yProps(5)} />
                    </Tabs>
                  </AppBar>
                  <SwipeableViews
                    axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                  >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                      <All></All>
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                      <Haircut></Haircut>
                    </TabPanel>
                    <TabPanel value={value} index={2} dir={theme.direction}>
                      <Coloring></Coloring>
                    </TabPanel>
                    <TabPanel value={value} index={3} dir={theme.direction}>
                      <Makeup></Makeup>
                    </TabPanel>
                    <TabPanel value={value} index={4} dir={theme.direction}>
                      <Massage></Massage>
                    </TabPanel>
                    <TabPanel value={value} index={5} dir={theme.direction}>
                      <Highlight></Highlight>
                    </TabPanel>
                  </SwipeableViews>
                  {fabs.map((fab, index) => (
                    <Zoom
                      key={fab.color}
                      in={value === index}
                      timeout={transitionDuration}
                      style={{
                        transitionDelay: `${
                          value === index ? transitionDuration.exit : 0
                        }ms`,
                      }}
                      unmountOnExit
                    >
                      <Fab sx={fab.sx} aria-label={fab.label} color={fab.color} onclick={upperBtnHandler}>
                        {fab.icon}
                      </Fab>
                    </Zoom>
                  ))}
                </Box>
              </div>
            </div>
          </div>
        </Container>
        <Footer></Footer>
      </>
    );
};

export default OurPortfolio;
