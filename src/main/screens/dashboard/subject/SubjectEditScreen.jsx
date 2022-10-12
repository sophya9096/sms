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
                            <label htmlFor="">Subject Id</label>
                            <input type="text" placeholder="Enter Registration Number" />
                        </div>
                        <div className={formClasses.input}>
                            <label htmlFor="">Subject Name</label>
                            <input type="text" placeholder="Enter Section" />
                        </div>
                        <div className={formClasses.input}>
                            <label htmlFor="">Faculty</label>
                            <input type="text" placeholder="Enter Class Teacher" />
                        </div>
                        <div className={formClasses.input}>
                            <label htmlFor="">Semester</label>
                            <select name="" id="">
                                <option value="male">Select Semester </option>
                                <option value="male">Active</option>
                                <option value="Female">In Active</option>
                            </select>
                        </div>
                        <div className={formClasses.input}>
                            <label htmlFor="">Class</label>
                            <input type="text" placeholder="Enter Email Address" />
                        </div>
                        <div className={formClasses.input}>
                            <label htmlFor="">Outline</label>
                            <input type="file" placeholder="Enter Start Time" />
                        </div>
                        <div className={formClasses.input}>
                            <label htmlFor="">Resources</label>
                            <input type="file" placeholder="Enter Start Time" />
                        </div>
                        <div className={formClasses.input}>
                            <label htmlFor="">Credit Hours</label>
                            <select name="" id="">
                                <option value="male">Select Credit Hours</option>
                                <option value="male">2 Hours</option>
                                <option value="Female">4 Hours</option>
                            </select>
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
