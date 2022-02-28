import { Checkbox, TextField } from "@mui/material";
import React from "react";
import "./registration.css";
import GoogleImage from "../../Image/google.png";
import { Link } from "react-router-dom";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const Registration = () => {
  return (
    <div className="registration-main">
      <div className="registration-page">
        <h1 className="text-center mt-5  mb-5 fw-normal">Create An Account</h1>
        <TextField
          id="outlined-basic"
          label="Full-Name"
          variant="outlined"
          sx={{ width: "50%" }}
          type="text"
        />

        <TextField
          id="outlined-basic"
          label="Email-Address"
          variant="outlined"
          sx={{ width: "50%", mt: "1.5rem" }}
          type="email"
        />

        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          sx={{ width: "50%", mt: "1.5rem" }}
          type="password"
        />
        <div className="mt-3">
          <Checkbox {...label} />
          <span>I agree to the terms and services.</span>
        </div>

        <button type="submit" className="submit-btn mt-5 mb-5">
          Register
        </button>

        <div className="login-here">
          <p>Already a member?</p>
          <Link to="/login"> <span className="main-login-here ms-1">Login Here.</span></Link>
        </div>

        <div>
          <p>
            -------------------- <span class="fw-bold"> Or </span>{" "}
            --------------------
          </p>
        </div>

        <div className="google-sign-in mb-5">
          <p className="lead">Sign In With Google</p>
          <img
            src={GoogleImage}
            alt="google-img"
            className="google-img ms-3"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Registration;
