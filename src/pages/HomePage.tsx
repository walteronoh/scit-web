import { Masonry } from "@mui/lab";
import { Box, Button, Paper, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import '../App.css';
import React from "react";

export default function HomePage() {
    const items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.sYbySbeJYT2qmBKFCzeYqAHaLH%26pid%3DApi&f=1&ipt=0df635d05e806d119d495a9ec61dd7073b5f67bf233ed5b5a729b68241919b86&ipo=images"
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.sYbySbeJYT2qmBKFCzeYqAHaLH%26pid%3DApi&f=1&ipt=0df635d05e806d119d495a9ec61dd7073b5f67bf233ed5b5a729b68241919b86&ipo=images"
        }
    ];

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
            <Box height={700} style={{ backgroundImage: `url(https://portal.jkuat.ac.ke/uploads/be22f43e-d362-44f5-ad75-e224883eb3bb.JPG?v=3P-2NX_HfasdOgPYtoxcmLKZPOJ_MWoDkEbSlVyq4ao)` }} className="carousel-box">
                <Carousel autoPlay={true}>
                    {
                        items.map((v, i) =>
                            <Paper className="carousel-item">
                                <div className="carousel-content">
                                    <Typography variant="h4" component="h2">
                                        {v.name}
                                    </Typography>
                                    <Typography variant="body1">
                                        {v.description}
                                    </Typography>
                                    <Button variant="contained" color="primary">
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