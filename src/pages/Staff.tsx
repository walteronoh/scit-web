import { Masonry } from "@mui/lab";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";

export default function Staff() {
    return (
        <Box>
            <Grid item xs={12} md={10}>
                <Box sx={{ width: "100%" }}>
                    <Typography gutterBottom variant="h5" component="div">
                        Staff
                    </Typography>
                    <Masonry columns={4}>
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
                                        sx={{ height: 200 }}
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
                                    <CardActions>
                                        <Button size="small">Update</Button>
                                    </CardActions>
                                </Card>)
                        }
                    </Masonry>
                </Box>
            </Grid>
        </Box>
    );
}