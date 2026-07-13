import {

Container,
Typography,
Box,
Button

} from "@mui/material";


import {

motion

} from "framer-motion";


import RoccheSection

from "../../sections/Rocche/RoccheSection";



export default function Amarissimo(){


  return (

    <Container maxWidth="lg">


    <Box

    component={motion.div}

    initial={{

    opacity:0

    }}

    animate={{

    opacity:1

    }}

    sx={{

    py:8

    }}

    >



    <Typography

    variant="h2"

    textAlign="center"

    fontWeight={700}

    >

    Amarissimo Rocche dei Roeri

    </Typography>



    <Box

    component="img"

    src="/images/amarissimo.jpeg"

    alt="Amarissimo Rocche dei Roeri"

    sx={{

    display:"block",

    mx:"auto",

    my:6,

    height:{

    xs:400,

    md:600

    }

    }}

    />



    <Typography

    textAlign="center"

    sx={{

    maxWidth:900,

    mx:"auto",

    lineHeight:2

    }}

    >


    Amarissimo Rocche dei Roeri nasce
    dalla stessa filosofia dell'amaro originale,
    con una personalità più intensa e decisa.


    <br/><br/>


    Una miscela di erbe selezionate,
    radici e botaniche del territorio che
    creano un gusto complesso e persistente.


    </Typography>



    <Button

    variant="contained"

    href="/ordina"

    sx={{

    display:"block",

    mx:"auto",

    mt:5

    }}

    >

    Ordina ora

    </Button>




    <RoccheSection />


    </Box>


    </Container>


  );


}