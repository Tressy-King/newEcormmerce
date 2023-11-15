'use client'
import { Box, Grid, Typography, Button, Link } from "@mui/material";
import { useState } from 'react'
import Modal from "@mui/material";
import SignIn from "../signIn/page";

const SignUp = () => {

    return (
        <>
            <img src="/clothing.jpg" alt="background" />
            <main>
                <h3>Sign Up to have access to our best clothing site</h3>
                <div className="holder">
                    <input placeholder="Name" type="name" />
                    <input placeholder="Gmail" type="email" />
                    <input placeholder="Password" type="password" />
                </div>

                <input id="checkbox" type="checkbox" /><span>Remember This</span>
                <br />
                <Button className="sign-up">Create an account</Button>
                <br />
                <h5>Already have an account?<Link href='/signIn'>
                    Sign In
                </Link></h5>

            </main>

        </>
    );
}

export default SignUp;