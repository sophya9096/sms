import React from "react";
import classes from "./TeacherScreen.module.css";
import formClasses from "../../../../shared/styles/FormStyles.module.css";
import Header from "../../../components/dashboard/Header";
import { Button } from "@material-ui/core";

const StudentScreen = ({ title }) => {
    return (
        <div>
            <Header />
            <div className={classes.teacherEditScreen}>
                <div className={classes.Profile}>
                    <img
                        src={
                            "data:image/jpeg;base64,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"
                        }
                        alt=""
                    />
                    <Button> Upload Picture </Button>
                </div>
                <div className={formClasses.formContainer}>
                    <h1>{title}</h1>
                    <form action="">
                        <div className={formClasses.input}>
                            <label htmlFor="">Teacher's ID</label>
                            <input type="text" placeholder="Enter Teacher's ID" />
                        </div>
                        <div className={formClasses.input}>
                            <label htmlFor="">First Name</label>
                            <input type="text" placeholder="Enter First Name" />
                        </div>
                        <div className={formClasses.input}>
                            <label htmlFor="">Middle Name</label>
                            <input type="text" placeholder="Enter Middle Name" />
                        </div>
                        <div className={formClasses.input}>
                            <label htmlFor="">Last Name</label>
                            <input type="text" placeholder="Enter Last Name" />
                        </div>
                        <div className={formClasses.input}>
                            <label htmlFor="">Email Address</label>
                            <input type="text" placeholder="Enter Email Address" />
                        </div>
                        <div className={formClasses.input}>
                            <label htmlFor="">Contact Number</label>
                            <input type="text" placeholder="Enter Contact Number" />
                        </div>
                        <div className={formClasses.input}>
                            <label htmlFor="">Gender</label>
                            <select name="" id="">
                                <option value="male">Select gender </option>
                                <option value="male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div className={formClasses.input}>
                            <label htmlFor="">Designation </label>
                            <input type="text" placeholder="Enter Designation" />
                        </div>
                        <div className={formClasses.input}>
                            <label htmlFor="">Home Address</label>
                            <input type="text" placeholder="Enter Home Address" />
                        </div>
                        <div className={formClasses.input}>
                            <label htmlFor="">Qualification</label>
                            <select name="" id="">
                                <option value="male">Select Qualification </option>
                                <option value="male">MBA</option>
                                <option value="Female">M.COM</option>
                            </select>
                        </div>
                        <div className={formClasses.input}>
                            <label htmlFor="">Subject</label>
                            <select name="" id="">
                                <option value="male">Select Sebject </option>
                                <option value="male">Maths</option>
                                <option value="Female">Accounts</option>
                                <option value="Female">Economics</option>
                            </select>
                        </div>

                        <div className={formClasses.input}>
                            <label htmlFor="">Contact Number</label>
                            <input type="text" placeholder="Enter Contact Number" />
                        </div>
                        <div className={formClasses.input}>
                            <label htmlFor="">Emergency Contact Name</label>
                            <input type="text" placeholder="Enter Emergency Contact Name" />
                        </div>
                        <div className={formClasses.input}>
                            <label htmlFor="">Emergency Contact Number</label>
                            <input type="text" placeholder="Enter Emergency Contact Number" />
                        </div>
                        <div className={formClasses.formActions}>
                            <Button variant="contained">Submit</Button>
                            <Button variant="contained">Reset</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default StudentScreen;
