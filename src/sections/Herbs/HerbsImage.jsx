import { useEffect, useState } from "react";

import {
    Typography,
    Box,
    IconButton,
    useTheme,
    useMediaQuery
} from "@mui/material";

export default function HerbsImage() {

    return (
        <Box
            sx={{
                pt: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%"
            }}
        >

            <Box

                as="img"
                src="/images/erbe.png"
                alt="Erbe della ricetta"
            >
            </Box>
        </Box>
    );
}