import {
  Box,
  Typography,
  Grid
} from "@mui/material";


import {
  motion
} from "framer-motion";



export default function RoccheSection(){


    return (

        <Box

        component={motion.section}

        initial={{
        opacity:0,
        y:30
        }}

        whileInView={{
        opacity:1,
        y:0
        }}

        viewport={{
        once:true
        }}

        sx={{

        py:10

        }}

        >


        <Grid

        container

        spacing={6}

        alignItems="center"

        >



        <Grid

        item

        xs={12}

        md={6}

        >


        </Grid>



        <Grid

        item

        xs={12}

        md={6}

        >


        <Typography

        variant="h3"

        fontWeight={700}

        gutterBottom

        >

        Cosa sono le Rocche

        </Typography>



        <Typography

        lineHeight={2}

        >


        Le Rocche sono profonde incisioni naturali
        che caratterizzano il paesaggio del Roero.


        <br/><br/>


        Sono il risultato dell'erosione delle acque
        che nel corso dei secoli hanno modellato
        questo territorio creando un ambiente unico
        ricco di biodiversità.


        <br/><br/>


        Da questo territorio nasce l'ispirazione
        dell'Amaro Rocche dei Roeri.

        </Typography>


        </Grid>

        <Box

        component="img"

        src="/images/rocche.svg"

        alt="Le Rocche del Roero"

        sx={{

        width:"100%",

        borderRadius:3

        }}

        />



        </Grid>


        </Box>


    );


}