import {
    Box,
    Typography,
    Button
} from "@mui/material";

import {
    Link
} from "react-router-dom";


import {
    motion
} from "framer-motion";

import { useTheme } from "@mui/material/styles";


export default function AboutSection() {

    const theme = useTheme();

    return (

        <Box

            component={motion.section}

            initial={{
                opacity: 0
            }}

            whileInView={{
                opacity: 1
            }}

            viewport={{
                once: true
            }}

            sx={{
                py: 5,
                display: "flex",
                alignItems: "center",
                flexDirection: "column"
            }}


        >


            <Typography
                variant="h3"
                gutterBottom
                component={Link}
                to="/about"
            >

                Chi siamo

            </Typography>


            <Typography

                align="center"

                sx={{

                    maxWidth: 900,

                    margin: "auto",

                    lineHeight: 1.9

                }}

            >


                Nasce dallo studio delle erbe spontanee del territorio roerino
                e loro utilizzi salutistici ad opera del Dott Cavallero
                Giuseppe Farmacista di Baldissero d’Alba,
                <br></br>
                Amaro rocche dei roeri è un marchio del registrato

            </Typography>


        </Box>

    );


}