import { Checkbox, TextField } from '@mui/material';
import React from 'react';
import "./registration.css"
import GoogleImage from "../../Image/google.png"
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Registration = () => {
    return (
        <div className="registration-main">
            <div className="registration-page">
                <h1 className="text-center mt-5  mb-5 fw-normal">Create An Account</h1>
                <TextField id="outlined-basic" label="Full-Name" variant="outlined" sx={{ width: '50%' }} type="text" />
                
                <TextField id="outlined-basic" label="Email-Address" variant="outlined" sx={{ width: '50%', mt: "1.5rem" }} type="email" />
                
                <TextField id="outlined-basic" label="Password" variant="outlined" sx={{ width: '50%', mt:"1.5rem" }} type="password"/>
                <div className="mt-3">
                    <Checkbox {...label} />
                    <span>I agree to the terms and services.</span>
                </div>
                
                <button type="submit" className="submit-btn mt-5 mb-5">Register</button>

                <div className="">
                    <p>Already a member?<span> Login here</span></p>
                </div>

                <div><p>-------------------- <span class="fw-bold"> Or </span> --------------------</p></div>
                

                <div className="google-sign-in mb-5">
                    <p className="lead">Sign In Google</p>
                    <img src={GoogleImage} alt="google-img" className="google-img ms-3"></img>
                </div>
            </div>
            
        </div>
    );
};

export default Registration;