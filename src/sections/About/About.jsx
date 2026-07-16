import {
    Box,
    Typography
} from "@mui/material";


import {
    motion
} from "framer-motion";


export default function About() {


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
                py: 5
            }}

        >


            <Typography
                variant="h3"
                align="center"
                gutterBottom
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