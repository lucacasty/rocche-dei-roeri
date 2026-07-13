import {

Container,
Typography,
Box,
Button

} from "@mui/material";


import {

motion

} from "framer-motion";


import HerbsAccordion

from "../../sections/Herbs/HerbsAccordion";



export default function Amaro(){


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

    Amaro Rocche dei Roeri

    </Typography>



    <Box

    component="img"

    src="/images/amaro.jpeg"

    alt="Amaro Rocche dei Roeri"

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


    Amaro Rocche dei Roeri un esperienza sensoriale che vi
    porterà a fare un viaggio nelle colline del Roero.
    Una nota fresca iniziale del finocchio selvatico che vi
    introduce in una passeggiata nei boschi delle rocche, il
    sentore armonico della camomilla e le note di spezie del
    tarassaco e di scorza di limone della melissa, trasmettono
    armonia e serenità come la vista sulle colline ordinate con di
    vigne frutteti e paesini con torri e castelli, titolo alcolico
    25% vol.


    </Typography>



    <Button

    href="/ordina"

    variant="contained"

    sx={{

    display:"block",

    mx:"auto",

    mt:5

    }}

    >

    Ordina ora

    </Button>



    <HerbsAccordion />



    </Box>


    </Container>


  );


}