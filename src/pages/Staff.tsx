import { Masonry } from "@mui/lab";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Modal, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import '../App.css';
import Appstyles from "./common/styles";
import { getUserSession } from "./common/session";

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

    const userSession = () => {
        return getUserSession();
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
                            />
                            <TextField
                                required
                                type="text"
                                id="outlined-required"
                                label="Description"
                                helperText="Description"
                                defaultValue=""
                            />
                            <Button variant="contained">Save</Button>
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