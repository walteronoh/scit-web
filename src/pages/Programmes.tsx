import { Masonry } from "@mui/lab";
import { Box, Typography, Card, CardMedia, CardContent, Button, CardActions, Modal, TextField, Alert } from "@mui/material";
import React, { useEffect, useState } from "react";
import Appstyles from "./common/styles";
import { getUserSession } from "./common/session";
import { addProgramme, fetchProgrammes } from "../api/api";
import { ProgrammesTypes } from "./types/programmes";
import { useNavigate } from "react-router-dom";

export default function Programmes() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState({
        name: "",
        description: "",
        department: "",
        banner: ""
    });
    const [alert, setAlert] = useState({
        severity: "0",
        message: ""
    });
    const [programmes, setProgrammes] = useState<Array<ProgrammesTypes>>();
    const [pageLoaded, setPageLoaded] = useState(false);

    useEffect(() => {
        if (!pageLoaded) {
            setPageLoaded(true);
            handleFetchProgrammes();
        }
    }, [pageLoaded]);

    const handleFetchProgrammes = () => {
        fetchProgrammes().then((resp) => {
            setProgrammes(resp);
        }).catch((error) => { })
    };

    const userSession = () => {
        return getUserSession();
    }

    const resetFields = () => {
        setInput({
            name: "",
            description: "",
            department: "",
            banner: ""
        });
        setTimeout(() => {
            setAlert({
                severity: "0",
                message: ""
            });
        }, 3000)

    }

    const handleAddProgramme = () => {
        addProgramme(input).then((resp) => {
            if (resp) {
                setAlert({ severity: "0", message: "Programme Successfully Added" });
                resetFields();
            } else {
                setAlert({ severity: "1", message: "We were not able to add the Programme" });
            }
        }).catch((error) => {
            setAlert({ severity: "1", message: "We encountered an error while adding the Programme" });
        });
    }

    return (
        <Box>
            <Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingRight: "20px" }}>
                    <Typography variant="h6">
                        Programmes
                    </Typography>
                    {
                        userSession().userType === "1" ?
                            <Button sx={{ height: "2rem", margin: "30px" }} variant="contained" color="info" onClick={() => setOpen(true)}>Add Programme</Button>
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
                            Add Programme
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                            <TextField
                                required
                                type="text"
                                id="outlined-required"
                                label="Programme Name"
                                helperText="Programme Name"
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
                                label="Department"
                                helperText="Department"
                                defaultValue=""
                                onChange={(e) => setInput((prevValue) => ({ ...prevValue, department: e.target.value }))}
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
                            <Button variant="contained" onClick={handleAddProgramme}>Save</Button>
                            {
                                alert.message &&
                                <Alert severity={alert.severity == "1" ? 'error' : 'success'}>{alert.message}</Alert>
                            }
                        </Box>
                    </Box>
                </Modal>
                <Masonry columns={{ xs: 1, sm: 1, md: 4, }}>
                    {
                        programmes ?
                            programmes.map((v, i) =>
                                <Card key={i}>
                                    <CardMedia
                                        sx={{ height: 400 }}
                                        image={v.banner}
                                        title="Programme Banner"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div">
                                            {v.name}
                                        </Typography>
                                        <Typography variant="body1" color="text.secondary">
                                            {v.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" onClick={() => {
                                            navigate(`/apply-now?mode=program&course=${v.name}`);
                                        }}>Apply Now</Button>
                                    </CardActions>
                                </Card>)
                            : <></>
                    }
                </Masonry>
            </Box>
        </Box>
    );
}