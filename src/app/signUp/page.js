'use client'
import { Button , Link } from "@mui/material";

const SignUp = () => {

    return (
        <>
            <img src="/clothing.jpg" alt="background" />
            <main>
                <h3>Sign Up to have access to our best clothing site</h3>
                <div className="holder">
                    <input placeholder="Name" type="name" required="required" />
                    <input placeholder="Gmail" type="email" required="required" />
                    <input placeholder="Password" type="password" required="required" />
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