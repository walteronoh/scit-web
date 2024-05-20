import { Alert, Avatar, Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authenticateUser } from "../api/api";

export default function Login() {
    const navigate = useNavigate();
    const [input, setInput] = useState({ username: "", password: "" });
    const [alert, setAlert] = useState({
        severity: "0",
        message: ""
    });
    const handleLogin = () => {
        authenticateUser(input.username, input.password).then((resp) => {
            if (resp) {
                // Redirect to dashboard
                navigate("/home", { replace: true });
            } else {
                setAlert({ severity: "1", message: "We were not able to authenticate your credentials. Please use the right username/password!" })
            }
        }).catch((err) => {
            setAlert({
                severity: "1", message: "We encountered an error while authenticating. Please try again later"
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
                    Login
                </Typography>
                <TextField
                    required
                    type="text"
                    id="outlined-required"
                    label="Username"
                    helperText="Username"
                    defaultValue=""
                    onChange={(e) => setInput((prevValue) => ({ ...prevValue, username: e.target.value }))}
                />
                <TextField
                    required
                    type="password"
                    id="outlined-required"
                    label="Password"
                    helperText="Password"
                    defaultValue=""
                    onChange={(e) => setInput((prevValue) => ({ ...prevValue, password: e.target.value }))}
                />
                <Button variant="contained" onClick={handleLogin}>Login</Button>
                {
                    alert.message &&
                    <Alert severity={alert.severity == "1" ? 'error' : 'success'}>{alert.message}</Alert>
                }
                <Typography variant="body2" sx={{ textAlign: "center", marginTop: "2rem" }}>
                    Username: admin, Password: password
                </Typography>
            </Box>
        </Box>
    );
}