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


    Nasce dallo studio delle erbe spontanee
    del territorio roerino e dei loro utilizzi
    salutistici.

    <br/><br/>

    Una miscela di erbe, fiori, radici e bacche
    che racchiude i profumi e i sapori delle
    colline del Roero.


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