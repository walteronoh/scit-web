import { Alert, Avatar, Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { addApplication } from "../api/api";

export default function ApplyNow() {
    const search = useLocation().search;
    const navigate = useNavigate();
    const [input, setInput] = useState({
        mode: "",
        full_name: "",
        email: "",
        course_applied: ""
    });
    const [alert, setAlert] = useState({
        severity: "0",
        message: ""
    });

    useEffect(() => {
        const mode = new URLSearchParams(search).get('mode') ?? "";
        const course = new URLSearchParams(search).get('course') ?? "";
        setInput((prevValue) => ({ ...prevValue, course_applied: course, mode: mode }))
    }, []);

    const handleApply = () => {
        addApplication(input).then((resp) => {
            if (resp) {
                setAlert({ severity: "0", message: "Application submitted successfully." });
                navigate("/", { replace: true });
            } else {
                setAlert({ severity: "1", message: "We were not able to save the application. Make sure all the fields are filled correctly!" })
            }
        }).catch((err) => {
            setAlert({
                severity: "1", message: "We encountered an error while saving the application. Please try again later"
            });
        });
    }


    return (
        <Box height={500} width={500} sx={{ position: "relative", margin: "50px auto", display: "flex", border: "2px solid green" }}>
            <Box component="form" sx={{ position: "relative", margin: "0 auto", display: "flex", flexDirection: "column", padding: "30px" }}>
                <Avatar alt="JKUAT Logo"
                    src="/jkuat-logo.png"
                    sx={{ width: 75, height: 75, padding: "30px", justifyContent: "center" }}
                />
                <Typography variant="h3" sx={{ textAlign: "center" }}>
                    Apply Now
                </Typography>
                <TextField
                    required
                    type="text"
                    id="outlined-required"
                    helperText="Course Applying"
                    value={input.course_applied}
                    disabled
                />
                <TextField
                    required
                    type="text"
                    id="outlined-required"
                    label="Full Names"
                    helperText="Full Names"
                    defaultValue=""
                    onChange={(e) => setInput((prevValue) => ({ ...prevValue, full_name: e.target.value }))}
                />
                <TextField
                    required
                    type="text"
                    id="outlined-required"
                    label="Email"
                    helperText="Email"
                    defaultValue=""
                    onChange={(e) => setInput((prevValue) => ({ ...prevValue, email: e.target.value }))}
                />
                <Button variant="contained" onClick={handleApply}>Apply</Button>
                {
                    alert.message &&
                    <Alert severity={alert.severity == "1" ? 'error' : 'success'}>{alert.message}</Alert>
                }
            </Box>
        </Box>
    );
}