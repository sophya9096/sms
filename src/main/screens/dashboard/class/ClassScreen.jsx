import { Button, IconButton } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos, Search } from "@material-ui/icons";
import React from "react";
import Header from "../../../components/dashboard/Header";
import classes from "./ClassScreen.module.css";

const ClassScreen = () => {
    return (
        <div>
            <Header />
            <div className={classes.mainScreen}>
                <div className={classes.headerTitle}>
                    <h1>Class Entries</h1>

                    <div className={classes.search}>
                        <input type="text" placeholder={"Search Here.."} />
                        <IconButton>
                            <Search />
                        </IconButton>
                    </div>
                </div>
                <div className={classes.table}>
                    <table>
                        {/* <thead> */}
                        <tr>
                            <th>S.No</th>
                            <th>Class</th>
                            <th>Section</th>
                            <th>Faculty</th>
                            <th>Room Number</th>
                            <th>Semester</th>
                            <th>Actions</th>
                        </tr>
                        {/* </thead> */}
                        {/* <tbody> */}
                        {[...Array(40)].map((_, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>XYZ</td>
                                <td>XYZ</td>
                                <td>XYZ</td>
                                <td>XYZ</td>
                                <td>XYZ</td>
                                {/* <td>XYZ</td> */}
                                <td>
                                    <Button>View</Button>
                                    <Button>Edit</Button>
                                </td>
                            </tr>
                        ))}
                        {/* </tbody> */}
                    </table>
                </div>
                <div className={classes.viewFooter}>
                    <div className={classes.viewBottom} />
                    <div className={classes.viewFooterActions}>
                        <Button startIcon={<ArrowBackIos />}> Previous Page</Button>
                        <Button endIcon={<ArrowForwardIos />}>Next Page </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassScreen;
