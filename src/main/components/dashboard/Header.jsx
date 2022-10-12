import { Button, IconButton } from "@material-ui/core";
import { Settings } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";

const Dashboard = () => {
    const [shadow, setShadow] = useState(false);

    useEffect(() => {
        const scrollHandler = () => {
            if (window.scrollY > 10) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };

        window.addEventListener("scroll", scrollHandler);

        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);

    return (
        <div className={`${classes.header} ${shadow ? classes.shadow : null}`}>
            <div className={classes.headerLeft}>
                <h1>
                    <Link to="/dashboard"> School Name</Link>
                </h1>
            </div>
            <div className={classes.headerRight}>
                <div className={classes.date}>
                    <p>Monday 21 August 2021 </p>
                </div>
                <span>|</span>
                <div className={classes.actions}>
                    <Button>Logout</Button>
                    <IconButton>
                        <Settings />
                    </IconButton>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
