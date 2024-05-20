import { Box, Typography } from "@mui/material";
import React from "react";

export default function PaymentMethods() {
    return (
        <Box>
            <Typography variant="h6">
                Payment Methods
            </Typography>
            <Typography variant="body1">We accept payments to the university via M-Pesa.</Typography>
            <Typography variant="h6">Payment via M-Pesa</Typography>
            <Typography variant="body1">Instructions for paying through M-Pesa..</Typography>
        </Box>
    );
}