import React from "react";
import { List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import classes from "./DahsboardSidebar.module.css";
import {
  Dashboard,
  MeetingRoom,
  People,
  Subject,
  Wc,
} from "@material-ui/icons";

const DahsboardSidebar = () => {
  const list = [
    { text: "Dahsbaord", Icon: Dashboard },
    { text: "Students", Icon: People },
    { text: "Teachers", Icon: Wc },
    { text: "Classes", Icon: MeetingRoom },
    { text: "Subject", Icon: Subject },
  ];

  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebarTop}>
        <div className={classes.sidebarTopBlue} />
        <div className={classes.sidebarTopOrange} />
        <div className={classes.sidebarProfile}>
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLmvaNZlvX40YDVaFfdL73RFfp_adKd0F6Tg&usqp=CAU"
            }
            alt=""
          />
          <h3>Sarah Connor</h3>
        </div>
      </div>
      <div className={classes.sidebarMain}>
        <List>
          {list.map(({ Icon, text }, index) => (
            <ListItem key={index} button>
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};

export default DahsboardSidebar;
