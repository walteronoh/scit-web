import { Masonry } from "@mui/lab";
import { Alert, Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Modal, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Appstyles from "./common/styles";
import { getUserSession } from "./common/session";
import { addAcademics, fetchAcademics } from "../api/api";
import { AcademicsTypes } from "./types/academics";
import { useNavigate } from "react-router-dom";

export default function Academics() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState({
        name: "",
        description: "",
        period: 0,
        amount: 0,
        instructor: "",
        banner: ""
    });
    const [alert, setAlert] = useState({
        severity: "0",
        message: ""
    });
    const [academics, setAcademics] = useState<Array<AcademicsTypes>>();
    const [pageLoaded, setPageLoaded] = useState(false);

    const userSession = () => {
        return getUserSession();
    }

    useEffect(() => {
        if (!pageLoaded) {
            setPageLoaded(true);
            handleFetchAcademics();
        }
    }, [pageLoaded]);

    const handleFetchAcademics = () => {
        fetchAcademics().then((resp) => {
            setAcademics(resp);
        }).catch((error) => { })
    };

    const resetFields = () => {
        setInput({
            name: "",
            description: "",
            period: 0,
            amount: 0,
            instructor: "",
            banner: ""
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
                            <TextField
                                required
                                type="text"
                                id="outlined-required"
                                label="Banner"
                                helperText="Banner i.e., (https://example.com/banner.png)"
                                defaultValue=""
                                onChange={(e) => setInput((prevValue) => ({ ...prevValue, banner: e.target.value }))}
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
                        academics ?
                            academics.map((v, i) =>
                                <Card key={i}>
                                    <CardMedia
                                        sx={{ height: 200 }}
                                        image={v.banner}
                                        title="Package Image"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div">
                                            {v.name}
                                        </Typography>
                                        <Typography variant="body1" color="text.secondary">
                                            {v.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Chip label={`${v.period} weeks`} variant="outlined" color="success" />
                                        <Chip label={`Kshs. ${v.amount}`} variant="outlined" />
                                        <Button size="small" onClick={() => {
                                            navigate(`/apply-now?mode=academic&course=${v.name}`);
                                        }}>Apply Now</Button>
                                    </CardActions>
                                </Card>
                            )
                            : <></>
                    }
                </Masonry>
            </Box>
        </Box>
    );
}

