import React from "react";
import { Button, Link } from "@mui/material";

const SignIn = () => {

    return (
        <>
            <img id="sign-in-background" src="/clothing.jpg" />
            <div className="sign-in-page">
                <div id="inputs">
                    <h3>Sign In</h3>
                    <input placeholder="Email" type="email" required="required" />
                    <input placeholder="Password" type="password" required="required" />
                </div>
                <div className="btns">
                    <Link className="back-to-signup" href="/signUp">Back</Link>
                    <Button className="sign-in-btn">Sign In</Button>
                </div>
            </div>
        </>
    );
}

export default SignIn;