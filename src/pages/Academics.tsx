import { Masonry } from "@mui/lab";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Modal, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Appstyles from "./common/styles";
import { getUserSession } from "./common/session";

export default function Academics() {
    const [open, setOpen] = useState(false);

    const userSession = () => {
        return getUserSession();
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

