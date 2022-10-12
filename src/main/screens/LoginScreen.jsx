import { Button } from "@material-ui/core";
import React from "react";
import classes from "./LoginScreen.module.css";

const LoginScreen = () => {
    return (
        <div className={classes.loginScreen}>
            <div className={classes.main}>
                <h1>School Name/Logo </h1>
                <form className={classes.mainBox}>
                    <div className={classes.input}>
                        <label htmlFor="">User Name</label>
                        <input type="text" placeholder="Please enter your name" />
                    </div>
                    <div className={classes.input}>
                        <label htmlFor="">Password</label>
                        <input type="text" placeholder="Please enter your password" />
                    </div>
                    <div className={classes.actions}>
                        <Button variant="contained">Sign in</Button>
                        <Button variant="contained">REGISTER</Button>
                    </div>
                </form>
            </div>
            <div className={classes.background} />
        </div>
    );
};

export default LoginScreen;
