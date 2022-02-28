import React from "react";
import "./login.css";
import { Button, Checkbox, TextField } from "@mui/material";
import { Container } from "react-bootstrap";
import LoginImage from "../../Image/undraw_secure_login_pdn4.png"

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Login = () => {
  return (
    <Container fluid className="loginContainer">
      <Container>
        <div className="login-main">
          <div className="form">
            <h1 className="text-center mb-5">Welcome Back</h1>
            <h1 className="text-center mb-5">LOGIN</h1>
            <TextField id="outlined-basic" sx={{ width: "80%" }} label="Email" variant="outlined" type="email" />
            <TextField id="outlined-basic" sx={{ mt: "30px", width: "80%" }} label="Password" variant="outlined" type="password" />
            <div className="float-start mt-3 forgot"><Checkbox {...label} /><span>Remember Me?</span>
              {/* <span className="forgot-span ms-5">Forgotten Password?</span> */}
              <Button variant="text" sx={{ ml: "180px" }}>Forgotten Password?</Button>
            </div>


            <Button variant="outlined" sx={{ mt: "30px" }}>Log IN</Button>
          </div>

          <div className="svg-form">
            <img src={LoginImage} alt="Login-Img" className="login-svg-img"></img>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default Login;
