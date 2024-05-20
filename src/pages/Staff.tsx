import { Masonry } from "@mui/lab";
import { Alert, Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Modal, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import '../App.css';
import Appstyles from "./common/styles";
import { getUserSession } from "./common/session";
import { addStaff } from "../api/api";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}

export default function Staff() {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState({
        full_name: "",
        description: "",
        profile: "",
        role: ""
    });
    const [alert, setAlert] = useState({ severity: "0", message: "" });

    const userSession = () => {
        return getUserSession();
    }

    const resetFields = () => {
        setInput({
            full_name: "",
            description: "",
            profile: "",
            role: ""
        });
        setTimeout(() => {
            setAlert({
                severity: "0",
                message: ""
            });
        }, 3000)

    }

    const handleAddStaff = () => {
        addStaff(input).then((resp) => {
            if (resp) {
                setAlert({ severity: "0", message: "Staff Successfully Added" });
                resetFields();
            } else {
                setAlert({ severity: "1", message: "We were not able to add the Staff" });
            }
        }).catch((error) => {
            setAlert({ severity: "1", message: "We encountered an error while adding the Staff" });
        })
    }

    return (
        <Box>
            <Box sx={{ width: "100%" }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingRight: "20px" }}>
                    <Typography variant="h6">
                        Staff
                    </Typography>
                    {
                        userSession().userType === "1" ?
                            <Button sx={{ height: "2rem", margin: "30px" }} variant="contained" color="info" onClick={() => setOpen(true)}>Add Staff</Button>
                            : <></>
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
                            Add Staff
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                            <TextField
                                required
                                type="text"
                                id="outlined-required"
                                label="Full Name"
                                helperText="Full Name"
                                defaultValue=""
                                onChange={(e) => setInput((prevValue) => ({ ...prevValue, full_name: e.target.value }))}
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
                                label="Role i.e Dean Of Students"
                                helperText="Role"
                                defaultValue=""
                                onChange={(e) => setInput((prevValue) => ({ ...prevValue, role: e.target.value }))}
                            />
                            {/* <TextField
                                required
                                type=""
                                id="outlined-required"
                                label="Profile"
                                helperText="Profile"
                                defaultValue=""
                                onChange={(e) => setInput((prevValue) => ({ ...prevValue, profile: e.target.value }))}
                            /> */}
                            <Button variant="contained" onClick={handleAddStaff}>Save</Button>
                            {
                                alert.message &&
                                <Alert severity={alert.severity == "1" ? 'error' : 'success'}>{alert.message}</Alert>
                            }
                        </Box>
                    </Box>
                </Modal>
                <Masonry columns={{ xs: 1, sm: 1, md: 4, }}>
                    {/* {
                                savedNews.map((v, i) =>
                                    <Card key={i}>
                                        <CardContent>
                                            <Typography gutterBottom variant="h6" component="div">
                                                {v.news_header}
                                            </Typography>
                                            <Typography variant="body1" color="text.secondary">
                                                {v.news_cut}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" onClick={() => {
                                                navigate(`/read-news/${v.id}`);
                                            }}>Read More</Button>
                                        </CardActions>
                                    </Card>
                                )
                            } */}
                    {
                        [1, 2, 3, 4, 5].map((v, i) =>
                            <Card key={i}>
                                <CardMedia
                                    sx={{ height: 400 }}
                                    image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.sYbySbeJYT2qmBKFCzeYqAHaLH%26pid%3DApi&f=1&ipt=0df635d05e806d119d495a9ec61dd7073b5f67bf233ed5b5a729b68241919b86&ipo=images"
                                    title="Cougars"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        Miss x y z
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        Desc
                                    </Typography>
                                </CardContent>
                            </Card>)
                    }
                </Masonry>
            </Box>
        </Box>
    );
}