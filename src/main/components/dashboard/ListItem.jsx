import { Button } from "@material-ui/core";
import React from "react";
import classes from "./ListItem.module.css";

const ListItem = ({ listItem }) => {
    return (
        <div className={classes.listItem}>
            <h3>{listItem.col1}</h3>
            <p>{listItem.col2}</p>
            <h3>{listItem.col3}</h3>
            <p>{listItem.col4}</p>
            <h3>{listItem.col5}</h3>
            <p>{listItem.col6}</p>
            <div className={classes.actions}>
                <Button variant="contained">View</Button>
                <Button variant="contained">Edit</Button>
            </div>
        </div>
    );
};

export default ListItem;
