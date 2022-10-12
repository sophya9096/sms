import { List, ListItem, ListItemText } from "@material-ui/core";
import React from "react";
import classes from "./DetailCard.module.css";
import { Link } from "react-router-dom";

const DetailCard = ({ color, title, list }) => {
    return (
        <div className={classes.detailCard}>
            <h2 style={{ background: color }}>{title}</h2>
            <List>
                {list.map(({ title, link }, index) => (
                    <ListItem key={index} button component={Link} to={link} className={classes.detailCardItem}>
                        <ListItemText primary={title} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default DetailCard;
