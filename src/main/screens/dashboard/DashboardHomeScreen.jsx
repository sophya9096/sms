import React from "react";
import classes from "./DashboardHomeScreen.module.css";
import Header from "../../components/dashboard/Header";
import Sidebar from "../../components/dashboard/DahsboardSidebar";
import { List, ListItem, ListItemText } from "@material-ui/core";
import DetailCard from "../../components/dashboard/DetailCard";

const Dashboard = () => {
    return (
        <div className={classes.dashboard}>
            <Header />
            <div className={classes.dashboardScreen}>
                <Sidebar />
                <div className={classes.dashboardMain}>
                    <h1>Dashboard</h1>
                    <div className={classes.content}>
                        <div className={classes.contentLeft}>
                            <div className={classes.contentLeftCard}>
                                <h2>Quick Links</h2>
                                <List>
                                    <ListItem button>
                                        <ListItemText primary="New Board" />
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemText primary="Schedule" />
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemText primary="Attendance" />
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemText primary="Reports" />
                                    </ListItem>
                                </List>
                            </div>
                        </div>
                        <div className={classes.contentRight}>
                            <DetailCard color={"#021244"} title={"STUDENTS"} list={studentList} />
                            <DetailCard color="#e67a1b" title="FACULTY" list={facultyList} />
                            <DetailCard color="#e67a1b" title="CLASSES" list={classList} />
                            <DetailCard color={"#021244"} title="SUBJECT" list={subjectList} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

const studentList = [
    { title: "Add Student Detail", link: "/dashboard/addStudent" },
    { title: "View Student Detail", link: "/dashboard/student" },
    { title: "Edit Student Detail", link: "/dashboard/editStudent" },
];
const facultyList = [
    { title: "Add Faculty Detail", link: "/dashboard/addFaculty" },
    { title: "View Faculty Detail", link: "/dashboard/faculty" },
    { title: "Edit Faculty Detail", link: "/dashboard/editFaculty" },
];
const classList = [
    { title: "Add Class Detail", link: "/dashboard/addClass" },
    { title: "View Class Detail", link: "/dashboard/class" },
    { title: "Edit Class Detail", link: "/dashboard/editClass" },
];
const subjectList = [
    { title: "Add Subject Detail", link: "/dashboard/addSubject" },
    { title: "View Subject Detail", link: "/dashboard/subject" },
    { title: "Edit Subject Detail", link: "/dashboard/editSubject" },
];
