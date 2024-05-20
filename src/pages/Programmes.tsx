import { Masonry } from "@mui/lab";
import { Box, Typography, Card, CardMedia, CardContent, Button, CardActions } from "@mui/material";
import React from "react";

export default function Programmes() {
    return (
        <Box>
            <Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingRight: "20px" }}>
                    <Typography variant="h6">
                        Programmes
                    </Typography>
                    <Button sx={{ height: "2rem", margin: "30px" }} variant="contained" color="info">Add Programme</Button>
                </Box>
                <Masonry columns={{ xs: 1, sm: 1, md: 4, }}>
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
                                        Education | School
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