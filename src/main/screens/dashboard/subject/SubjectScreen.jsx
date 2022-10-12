import { Button, IconButton } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos, Search } from "@material-ui/icons";
import React from "react";
import Header from "../../../components/dashboard/Header";
import classes from "./SubjectScreen.module.css";

const SubjectScreen = () => {
    return (
        <div>
            <Header />
            <div className={classes.mainScreen}>
                <div className={classes.headerTitle}>
                    <h1>Subject Entries</h1>

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
                            <th>Subject</th>
                            <th>Teacher</th>
                            <th>Smester</th>
                            <th>Credit Hours</th>
                            <th>Status</th>
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
                                <td>{i % 2 === 0 ? "Active" : "Inactive"}</td>
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

export default SubjectScreen;
