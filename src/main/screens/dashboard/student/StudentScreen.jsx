import { Button, IconButton } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos, Search } from "@material-ui/icons";
import React from "react";
import classes from "./StudentScreen.module.css";
import Header from "../../../components/dashboard/Header";
import ListItem from "../../../components/dashboard/ListItem";

const StudentScreen = () => {
    return (
        <div>
            <Header />
            <div className={classes.studentScreenMain}>
                <div className={classes.headerTitle}>
                    <h1>All Students</h1>

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

export default StudentScreen;

const listArray = [
    {
        col1: "Student Name",
        col2: "Jhon Doe",
        col3: "class",
        col4: "10th Standard",
        col5: "Section",
        col6: "Section B",
    },
    {
        col1: "Student Name",
        col2: "Jhon Doe",
        col3: "class",
        col4: "10th Standard",
        col5: "Section",
        col6: "Section B",
    },
    {
        col1: "Student Name",
        col2: "Jhon Doe",
        col3: "class",
        col4: "10th Standard",
        col5: "Section",
        col6: "Section B",
    },
    {
        col1: "Student Name",
        col2: "Jhon Doe",
        col3: "class",
        col4: "10th Standard",
        col5: "Section",
        col6: "Section B",
    },
    {
        col1: "Student Name",
        col2: "Jhon Doe",
        col3: "class",
        col4: "10th Standard",
        col5: "Section",
        col6: "Section B",
    },
    {
        col1: "Student Name",
        col2: "Jhon Doe",
        col3: "class",
        col4: "10th Standard",
        col5: "Section",
        col6: "Section B",
    },
    {
        col1: "Student Name",
        col2: "Jhon Doe",
        col3: "class",
        col4: "10th Standard",
        col5: "Section",
        col6: "Section B",
    },
    {
        col1: "Student Name",
        col2: "Jhon Doe",
        col3: "class",
        col4: "10th Standard",
        col5: "Section",
        col6: "Section B",
    },
    {
        col1: "Student Name",
        col2: "Jhon Doe",
        col3: "class",
        col4: "10th Standard",
        col5: "Section",
        col6: "Section B",
    },
    {
        col1: "Student Name",
        col2: "Jhon Doe",
        col3: "class",
        col4: "10th Standard",
        col5: "Section",
        col6: "Section B",
    },
    {
        col1: "Student Name",
        col2: "Jhon Doe",
        col3: "class",
        col4: "10th Standard",
        col5: "Section",
        col6: "Section B",
    },
    {
        col1: "Student Name",
        col2: "Jhon Doe",
        col3: "class",
        col4: "10th Standard",
        col5: "Section",
        col6: "Section B",
    },
    {
        col1: "Student Name",
        col2: "Jhon Doe",
        col3: "class",
        col4: "10th Standard",
        col5: "Section",
        col6: "Section B",
    },
    {
        col1: "Student Name",
        col2: "Jhon Doe",
        col3: "class",
        col4: "10th Standard",
        col5: "Section",
        col6: "Section B",
    },
    {
        col1: "Student Name",
        col2: "Jhon Doe",
        col3: "class",
        col4: "10th Standard",
        col5: "Section",
        col6: "Section B",
    },
    {
        col1: "Student Name",
        col2: "Jhon Doe",
        col3: "class",
        col4: "10th Standard",
        col5: "Section",
        col6: "Section B",
    },
    {
        col1: "Student Name",
        col2: "Jhon Doe",
        col3: "class",
        col4: "10th Standard",
        col5: "Section",
        col6: "Section B",
    },
    {
        col1: "Student Name",
        col2: "Jhon Doe",
        col3: "class",
        col4: "10th Standard",
        col5: "Section",
        col6: "Section B",
    },
    {
        col1: "Student Name",
        col2: "Jhon Doe",
        col3: "class",
        col4: "10th Standard",
        col5: "Section",
        col6: "Section B",
    },
    {
        col1: "Student Name",
        col2: "Jhon Doe",
        col3: "class",
        col4: "10th Standard",
        col5: "Section",
        col6: "Section B",
    },
    {
        col1: "Student Name",
        col2: "Jhon Doe",
        col3: "class",
        col4: "10th Standard",
        col5: "Section",
        col6: "Section B",
    },
    {
        col1: "Student Name",
        col2: "Jhon Doe",
        col3: "class",
        col4: "10th Standard",
        col5: "Section",
        col6: "Section B",
    },
    {
        col1: "Student Name",
        col2: "Jhon Doe",
        col3: "class",
        col4: "10th Standard",
        col5: "Section",
        col6: "Section B",
    },
    {
        col1: "Student Name",
        col2: "Jhon Doe",
        col3: "class",
        col4: "10th Standard",
        col5: "Section",
        col6: "Section B",
    },
    {
        col1: "Student Name",
        col2: "Jhon Doe",
        col3: "class",
        col4: "10th Standard",
        col5: "Section",
        col6: "Section B",
    },
    {
        col1: "Student Name",
        col2: "Jhon Doe",
        col3: "class",
        col4: "10th Standard",
        col5: "Section",
        col6: "Section B",
    },
    {
        col1: "Student Name",
        col2: "Jhon Doe",
        col3: "class",
        col4: "10th Standard",
        col5: "Section",
        col6: "Section B",
    },
    {
        col1: "Student Name",
        col2: "Jhon Doe",
        col3: "class",
        col4: "10th Standard",
        col5: "Section",
        col6: "Section B",
    },
    {
        col1: "Student Name",
        col2: "Jhon Doe",
        col3: "class",
        col4: "10th Standard",
        col5: "Section",
        col6: "Section B",
    },
    {
        col1: "Student Name",
        col2: "Jhon Doe",
        col3: "class",
        col4: "10th Standard",
        col5: "Section",
        col6: "Section B",
    },
    {
        col1: "Student Name",
        col2: "Jhon Doe",
        col3: "class",
        col4: "10th Standard",
        col5: "Section",
        col6: "Section B",
    },
    {
        col1: "Student Name",
        col2: "Jhon Doe",
        col3: "class",
        col4: "10th Standard",
        col5: "Section",
        col6: "Section B",
    },
    {
        col1: "Student Name",
        col2: "Jhon Doe",
        col3: "class",
        col4: "10th Standard",
        col5: "Section",
        col6: "Section B",
    },
    {
        col1: "Student Name",
        col2: "Jhon Doe",
        col3: "class",
        col4: "10th Standard",
        col5: "Section",
        col6: "Section B",
    },
    {
        col1: "Student Name",
        col2: "Jhon Doe",
        col3: "class",
        col4: "10th Standard",
        col5: "Section",
        col6: "Section B",
    },
    {
        col1: "Student Name",
        col2: "Jhon Doe",
        col3: "class",
        col4: "10th Standard",
        col5: "Section",
        col6: "Section B",
    },
];
