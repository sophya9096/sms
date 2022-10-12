import React from "react";
import classes from "./Layout.module.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginScreen from "../screens/LoginScreen";
import Dashboard from "../screens/dashboard/DashboardHomeScreen";
import EditStudentScreen from "../screens/dashboard/student/EditStudentScreen";
import TeacherEditScreen from "../screens/dashboard/teacher/TeacherEditScreen";
import ClassEditScreen from "../screens/dashboard/class/ClassEditScreen";
import SubjectEditScreeen from "../screens/dashboard/subject/SubjectEditScreen";
import StudentScreen from "../screens/dashboard/student/StudentScreen";
import TeacherScreen from "../screens/dashboard/teacher/TeacherScreen";
import ClassScreen from "../screens/dashboard/class/ClassScreen";
import SubjectScreen from "../screens/dashboard/subject/SubjectScreen";

const Layout = () => {
    const style = {
        textAlign: "center",
        background: "var(--dark-blue)",
        padding: "0.5rem 1rem",
        color: "white",
    };

    return (
        <div className={classes.layout}>
            <Router>
                <Route exact path="/dashboard">
                    <Dashboard />
                </Route>
                <Route exact path="/dashboard/student">
                    <StudentScreen />
                </Route>
                <Route exact path="/dashboard/addStudent">
                    <EditStudentScreen title={"Add Student Profile"} />
                </Route>
                <Route exact path="/dashboard/editStudent">
                    <EditStudentScreen title={"Edit Student Profile"} />
                </Route>
                <Route exact path="/dashboard/faculty">
                    <TeacherScreen />
                </Route>
                <Route exact path="/dashboard/addFaculty">
                    <TeacherEditScreen title={"Add Teacher Profile"} />
                </Route>
                <Route exact path="/dashboard/editFaculty">
                    <TeacherEditScreen title={"Edit Teacher Profile"} />
                </Route>
                <Route exact path="/dashboard/class">
                    <ClassScreen />
                </Route>
                <Route exact path="/dashboard/addClass">
                    <ClassEditScreen title={"Add Class Profile"} />
                </Route>
                <Route exact path="/dashboard/editClass">
                    <ClassEditScreen title={"Edit Class Profile"} />
                </Route>
                <Route exact path="/dashboard/subject">
                    <SubjectScreen />
                </Route>
                <Route exact path="/dashboard/addSubject">
                    <SubjectEditScreeen title={"Add Subject Profile"} />
                </Route>
                <Route exact path="/dashboard/editSubject">
                    <SubjectEditScreeen title={"Edit Subject Profile"} />
                </Route>
                <Route exact path="/login">
                    <LoginScreen />
                </Route>
            </Router>
            <p style={style} className={classes.bottomTag}>
                All Right Reserved
            </p>
        </div>
    );
};

export default Layout;
