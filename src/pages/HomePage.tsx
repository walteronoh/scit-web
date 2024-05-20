import { Masonry } from "@mui/lab";
import { Alert, Box, Button, Modal, Paper, TextField, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import '../App.css';
import React, { useEffect, useState } from "react";
import { getUserSession } from "./common/session";
import Appstyles from "./common/styles";
import { addActivity, fetchActivities } from "../api/api";
import { ActivitiesTypes } from "./types/activities";
import { error } from "console";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState({
        title: "",
        description: "",
        link: ""
    });
    const [alert, setAlert] = useState({
        severity: "0",
        message: ""
    });
    const [activities, setActivities] = useState<Array<ActivitiesTypes>>();
    const [pageLoaded, setPageLoaded] = useState(false);

    useEffect(() => {
        if (!pageLoaded) {
            setPageLoaded(true);
            handleFetchActivities();
        }
    }, [pageLoaded])

    const handleFetchActivities = () => {
        fetchActivities().then((resp) => {
            setActivities(resp);
        }).catch((error) => { })
    };

    const userSession = () => {
        return getUserSession();
    }

    const resetFields = () => {
        setInput({
            title: "",
            description: "",
            link: ""
        });
        setTimeout(() => {
            setAlert({
                severity: "0",
                message: ""
            });
        }, 3000)

    }

    const handleAddActivity = () => {
        addActivity(input).then((resp) => {
            if (resp) {
                setAlert({ severity: "0", message: "Activity Successfully Added" });
                resetFields();
            } else {
                setAlert({ severity: "1", message: "We were not able to add the Activity" });
            }
        }).catch((error) => {
            setAlert({ severity: "1", message: "We encountered an error while adding the Activity" });
        });
    }

    return (
        <>
            {/* <Box height={200}>
                <Typography variant="h4">
                    Welcome to the School of Computing and Information Technology (SCIT)
                </Typography>
            </Box>
            <Box>
                <Typography variant="h6">
                    Latest Activities
                </Typography>
            </Box> */}
            <Box sx={{ display: 'flex', justifyContent: "flex-end", paddingRight: "20px" }}>
                {
                    userSession().userType === "1" ?
                        <Button sx={{ height: "2rem", margin: "30px" }} variant="contained" color="info" onClick={() => setOpen(true)}>Add Activity</Button>
                        : ""
                }
            </Box>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={Appstyles.model}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Add Activity
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <TextField
                            required
                            type="text"
                            id="outlined-required"
                            label="Title"
                            helperText="Title"
                            defaultValue=""
                            onChange={(e) => setInput((prevValue) => ({ ...prevValue, title: e.target.value }))}
                        />
                        <TextField
                            required
                            type="text"
                            id="outlined-required"
                            label="Description"
                            helperText="Description"
                            defaultValue=""
                            onChange={(e) => setInput((prevValue) => ({ ...prevValue, description: e.target.value }))}
                        />
                        <TextField
                            required
                            type="text"
                            id="outlined-required"
                            label="Activity Link"
                            helperText="Activity Link i.e., https://portal.jkuat.co.ke"
                            defaultValue=""
                            onChange={(e) => setInput((prevValue) => ({ ...prevValue, link: e.target.value }))}
                        />
                        <Button variant="contained" onClick={handleAddActivity}>Save</Button>
                        {
                            alert.message &&
                            <Alert severity={alert.severity == "1" ? 'error' : 'success'}>{alert.message}</Alert>
                        }
                    </Box>
                </Box>
            </Modal>
            <Box height={700} style={{ backgroundImage: `url(https://portal.jkuat.ac.ke/uploads/be22f43e-d362-44f5-ad75-e224883eb3bb.JPG?v=3P-2NX_HfasdOgPYtoxcmLKZPOJ_MWoDkEbSlVyq4ao)` }} className="carousel-box">
                <Carousel autoPlay={true}>
                    {
                        activities &&
                        activities.map((v, i) =>
                            <Paper className="carousel-item">
                                <div className="carousel-content">
                                    <Typography variant="h4" component="h2">
                                        {v.title}
                                    </Typography>
                                    <Typography variant="body1">
                                        {v.description}
                                    </Typography>
                                    <Button variant="contained" color="primary" onClick={() => { window.location.href = v.link }}>
                                        Read More
                                    </Button>
                                </div>
                            </Paper>
                        )
                    }
                </Carousel>
            </Box>
            <Box>
                <Typography variant="h6">
                    Messages
                </Typography>
            </Box>
        </>
    );
}