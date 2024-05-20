import { Typography } from "@mui/material";
import React from "react";

export default function Footer() {
    return (
        // Check between fixed and absolute
        <Typography fontSize={13} sx={{ position: "absolute", width: "100%", textAlign: "center", bottom: "0" }}>
            <p>&copy; 2024 School of Computing and Information Technology (SCIT). All Rights Reserved.</p>
        </Typography>
    );
}