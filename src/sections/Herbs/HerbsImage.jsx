import { useEffect, useState } from "react";

import {
    Typography,
    Box,
    IconButton,
    useTheme,
    useMediaQuery
} from "@mui/material";

export default function HerbsImage({image}) {

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
                src={"/images/"+image}
                alt="Erbe della ricetta"
                sx={{
                    width:{ xs: "100%", sm: "800px"},
                    background: "#FFF"
                }}

            >
            </Box>
        </Box>
    );
}