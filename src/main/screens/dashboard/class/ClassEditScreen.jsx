import { Button } from "@material-ui/core";
import React from "react";
import formClasses from "../../../../shared/styles/FormStyles.module.css";
import Header from "../../../components/dashboard/Header";

const EditClassScreen = ({ title }) => {
    return (
        <div>
            <Header />
            <div style={{ padding: "4rem", minHeight: "100vh" }}>
                <div className={formClasses.formContainer}>
                    <h1>{title}</h1>
                    <form action="">
                        <div className={formClasses.input}>
                            <label htmlFor="">Class Id</label>
                            <input type="text" placeholder="Enter Registration Number" />
                        </div>
                        <div className={formClasses.input}>
                            <label htmlFor="">Section</label>
                            <input type="text" placeholder="Enter Section" />
                        </div>
                        <div className={formClasses.input}>
                            <label htmlFor="">Class Teacher</label>
                            <input type="text" placeholder="Enter Class Teacher" />
                        </div>
                        <div className={formClasses.input}>
                            <label htmlFor="">Number of Students</label>
                            <input type="number" placeholder="Number of Students" />
                        </div>
                        <div className={formClasses.input}>
                            <label htmlFor="">Classs Room Number</label>
                            <input type="number" placeholder="Enter Email Address" />
                        </div>
                        <div className={formClasses.input}>
                            <label htmlFor="">Semester</label>
                            <select name="" id="">
                                <option value="male">Set Semester </option>
                                <option value="male">Active</option>
                                <option value="Female">In Active</option>
                            </select>
                        </div>
                        <div className={formClasses.input}>
                            <label htmlFor="">Start Time</label>
                            <input type="date" placeholder="Enter Start Time" />
                        </div>
                        <div className={formClasses.input}>
                            <label htmlFor="">End Time</label>
                            <input type="date" placeholder="Enter End Time" />
                        </div>
                        <div className={formClasses.input}>
                            <label htmlFor="">Status</label>
                            <select name="" id="">
                                <option value="male">Set Status </option>
                                <option value="male">Active</option>
                                <option value="Female">In Active</option>
                            </select>
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

export default EditClassScreen;
