import {
Box,
Typography
} from "@mui/material";


import {
motion
} from "framer-motion";


export default function About(){


    return (

        <Box

        component={motion.section}

        initial={{
        opacity:0
        }}

        whileInView={{
        opacity:1
        }}

        viewport={{
        once:true
        }}

        sx={{
        py:10
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

        maxWidth:900,

        margin:"auto",

        lineHeight:1.9

        }}

        >


        Amaro Rocche dei Roeri nasce dallo studio delle erbe
        spontanee del territorio roerino e dei loro utilizzi
        salutistici ad opera del Dott. Cavallero Giuseppe,
        farmacista di Baldissero d'Alba.


        <br/><br/>


        Una ricetta composta da erbe, fiori, radici e bacche
        che racconta l'identità di un territorio unico.

        </Typography>


        </Box>

    );


}