import { Masonry } from "@mui/lab";
import { Alert, Box, Button, Card, CardActions, CardContent, CardMedia, Modal, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Appstyles from "./common/styles";
import { getUserSession } from "./common/session";
import { addAcademics, fetchAcademics } from "../api/api";

export default function Academics() {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState({
        name: "",
        description: "",
        period: 0,
        amount: 0,
        instructor: ""
    });
    const [alert, setAlert] = useState({
        severity: "0",
        message: ""
    })

    const userSession = () => {
        return getUserSession();
    }

    useEffect(() => {
        // fetchAcademics().then((resp) => {
        //     console.log("Resp");
        //     console.log(resp);
        // }).catch((err) => {
        //     console.log("Err");
        //     console.log(err);
        // })
    }, [])

    const resetFields = () => {
        setInput({
            name: "",
            description: "",
            period: 0,
            amount: 0,
            instructor: ""
        });
        setTimeout(() => {
            setAlert({
                severity: "0",
                message: ""
            });
        }, 3000)

    }

    const handleAddAcademics = () => {
        addAcademics(input).then((resp) => {
            if (resp) {
                setAlert({ severity: "0", message: "Academic Package Successfully Added" });
                // Reset fields
                resetFields();
            } else {
                setAlert({ severity: "1", message: "We were not able to add the Academic Package" });
            }
        }).catch((error) => {
            setAlert({ severity: "1", message: "We encountered an error while adding the Package" });
        });
    }

    return (
        <Box>
            <Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingRight: "20px" }}>
                    <Typography variant="h6">
                        Academics
                    </Typography>
                    {
                        userSession().userType === "1" ?
                            <Button sx={{ height: "2rem", margin: "30px" }} variant="contained" color="info" onClick={() => setOpen(true)}>Add</Button>
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
                            Add
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                            <TextField
                                required
                                type="text"
                                id="outlined-required"
                                label="Package Name"
                                helperText="Package Name"
                                defaultValue=""
                                onChange={(e) => setInput((prevValue) => ({ ...prevValue, name: e.target.value }))}
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
                                label="Instructor"
                                helperText="Instructor"
                                defaultValue=""
                                onChange={(e) => setInput((prevValue) => ({ ...prevValue, instructor: e.target.value }))}
                            />
                            <TextField
                                required
                                type="number"
                                id="outlined-required"
                                label="Period (Weeks)"
                                helperText="Period"
                                defaultValue=""
                                onChange={(e) => setInput((prevValue) => ({ ...prevValue, period: Number(e.target.value) }))}
                            />
                            <TextField
                                required
                                type="number"
                                id="outlined-required"
                                label="Amount"
                                helperText="Amount"
                                defaultValue=""
                                onChange={(e) => setInput((prevValue) => ({ ...prevValue, amount: Number(e.target.value) }))}
                            />
                            <Button variant="contained" onClick={handleAddAcademics}>Save</Button>
                            {
                                alert.message &&
                                <Alert severity={alert.severity == "1" ? 'error' : 'success'}>{alert.message}</Alert>
                            }
                        </Box>
                    </Box>
                </Modal>
                <Masonry columns={{ xs: 1, sm: 1, md: 4, }}>
                    {
                        [1, 2, 3, 4, 5].map((v, i) =>
                            <Card key={i}>
                                <CardMedia
                                    sx={{ height: 200 }}
                                    image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.sYbySbeJYT2qmBKFCzeYqAHaLH%26pid%3DApi&f=1&ipt=0df635d05e806d119d495a9ec61dd7073b5f67bf233ed5b5a729b68241919b86&ipo=images"
                                    title="Cougars"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        Cisco Academy
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        Info ..
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Apply Now</Button>
                                </CardActions>
                            </Card>)
                    }
                </Masonry>
            </Box>
        </Box>
    );
}

