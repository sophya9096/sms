import React from "react";
import { Button, IconButton } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos, Search } from "@material-ui/icons";
import Header from "../../../components/dashboard/Header";
import ListItem from "../../../components/dashboard/ListItem";
import classes from "./TeacherScreen.module.css";

const TeacherScreen = () => {
    return (
        <div>
            <Header />
            <div className={classes.teacherScreenMain}>
                <div className={classes.headerTitle}>
                    <h1>All Teachers</h1>

                    <div className={classes.search}>
                        <input type="text" placeholder={"Search Here.."} />
                        <IconButton>
                            <Search />
                        </IconButton>
                    </div>
                </div>
                <div className={classes.list}>
                    {listArray.map((listItem, i) => (
                        <ListItem key={i} listItem={listItem} />
                    ))}
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

export default TeacherScreen;

const listArray = [
    {
        col1: "Faculty Name",
        col2: "Jane Doe",
        col3: "Designation",
        col4: "Seniour Teacher",
        col5: "Subject",
        col6: "Mathematics",
    },
    {
        col1: "Faculty Name",
        col2: "Jane Doe",
        col3: "Designation",
        col4: "Seniour Teacher",
        col5: "Subject",
        col6: "Mathematics",
    },
    {
        col1: "Faculty Name",
        col2: "Jane Doe",
        col3: "Designation",
        col4: "Seniour Teacher",
        col5: "Subject",
        col6: "Mathematics",
    },
    {
        col1: "Faculty Name",
        col2: "Jane Doe",
        col3: "Designation",
        col4: "Seniour Teacher",
        col5: "Subject",
        col6: "Mathematics",
    },
    {
        col1: "Faculty Name",
        col2: "Jane Doe",
        col3: "Designation",
        col4: "Seniour Teacher",
        col5: "Subject",
        col6: "Mathematics",
    },
    {
        col1: "Faculty Name",
        col2: "Jane Doe",
        col3: "Designation",
        col4: "Seniour Teacher",
        col5: "Subject",
        col6: "Mathematics",
    },
    {
        col1: "Faculty Name",
        col2: "Jane Doe",
        col3: "Designation",
        col4: "Seniour Teacher",
        col5: "Subject",
        col6: "Mathematics",
    },
    {
        col1: "Faculty Name",
        col2: "Jane Doe",
        col3: "Designation",
        col4: "Seniour Teacher",
        col5: "Subject",
        col6: "Mathematics",
    },
    {
        col1: "Faculty Name",
        col2: "Jane Doe",
        col3: "Designation",
        col4: "Seniour Teacher",
        col5: "Subject",
        col6: "Mathematics",
    },
    {
        col1: "Faculty Name",
        col2: "Jane Doe",
        col3: "Designation",
        col4: "Seniour Teacher",
        col5: "Subject",
        col6: "Mathematics",
    },
    {
        col1: "Faculty Name",
        col2: "Jane Doe",
        col3: "Designation",
        col4: "Seniour Teacher",
        col5: "Subject",
        col6: "Mathematics",
    },
    {
        col1: "Faculty Name",
        col2: "Jane Doe",
        col3: "Designation",
        col4: "Seniour Teacher",
        col5: "Subject",
        col6: "Mathematics",
    },
    {
        col1: "Faculty Name",
        col2: "Jane Doe",
        col3: "Designation",
        col4: "Seniour Teacher",
        col5: "Subject",
        col6: "Mathematics",
    },
    {
        col1: "Faculty Name",
        col2: "Jane Doe",
        col3: "Designation",
        col4: "Seniour Teacher",
        col5: "Subject",
        col6: "Mathematics",
    },
    {
        col1: "Faculty Name",
        col2: "Jane Doe",
        col3: "Designation",
        col4: "Seniour Teacher",
        col5: "Subject",
        col6: "Mathematics",
    },
    {
        col1: "Faculty Name",
        col2: "Jane Doe",
        col3: "Designation",
        col4: "Seniour Teacher",
        col5: "Subject",
        col6: "Mathematics",
    },
    {
        col1: "Faculty Name",
        col2: "Jane Doe",
        col3: "Designation",
        col4: "Seniour Teacher",
        col5: "Subject",
        col6: "Mathematics",
    },
    {
        col1: "Faculty Name",
        col2: "Jane Doe",
        col3: "Designation",
        col4: "Seniour Teacher",
        col5: "Subject",
        col6: "Mathematics",
    },
    {
        col1: "Faculty Name",
        col2: "Jane Doe",
        col3: "Designation",
        col4: "Seniour Teacher",
        col5: "Subject",
        col6: "Mathematics",
    },
];
