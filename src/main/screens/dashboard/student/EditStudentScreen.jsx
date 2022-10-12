import React from "react";
import classes from "./StudentScreen.module.css";
import formClasses from "../../../../shared/styles/FormStyles.module.css";
import Header from "../../../components/dashboard/Header";
import { Button } from "@material-ui/core";

const StudentScreen = ({ title }) => {
    return (
        <div>
            <Header />
            <div className={classes.studentEditScreen}>
                <div className={classes.Profile}>
                    <img
                        src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp_OZBOQeYPyILLtjuWWm4SYTZkuhcsR-I-g&usqp=CAU"}
                        alt=""
                    />
                    <Button> Upload Picture </Button>
                </div>
                <div className={formClasses.formContainer}>
                    <h1>{title}</h1>
                    <form action="">
                        <div className={formClasses.input}>
                            <label htmlFor="">Registration Number</label>
                            <input type="text" placeholder="Enter Registration Number" />
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
                            <label htmlFor="">Home Address</label>
                            <input type="text" placeholder="Enter Home Address" />
                        </div>
                        <div className={formClasses.input}>
                            <label htmlFor="">Father's Occupation</label>
                            <input type="text" placeholder="Enter Father's Occupation" />
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
