import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box
} from "@mui/material";


import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import herbData from "../../data/herbs";



export default function HerbsAccordion(){


    return (

        <Box
        sx={{
        mt:8
        }}
        >


        <Typography

        variant="h3"

        textAlign="center"

        mb={4}

        >

        Le erbe della miscela

        </Typography>



        {
        herbData.map((herb)=>(


        <Accordion
        key={herb.name}
        >


        <AccordionSummary

        expandIcon={<ExpandMoreIcon />}

        >


        <Typography
        fontWeight={700}
        >

        {herb.name}

        </Typography>


        </AccordionSummary>



        <AccordionDetails>


        <Box

        sx={{

        display:"flex",

        gap:3,

        flexDirection:{
        xs:"column",
        md:"row"
        },

        alignItems:"center"

        }}

        >


        <Box

        component="img"

        src={herb.image}

        alt={herb.name}

        sx={{

        width:{
        xs:"100%",
        md:220
        },

        borderRadius:3

        }}

        />



        <Typography>

        {herb.description}

        </Typography>



        </Box>


        </AccordionDetails>


        </Accordion>


        ))
        }



        </Box>


    );


}