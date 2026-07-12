import {

Box,
Typography

} from "@mui/material";


export default function Contact(){


    return (

        <Box

        sx={{

        py:10,

        textAlign:"center"

        }}

        >


        <Typography
        variant="h3"
        >

        Contatti

        </Typography>



        <Typography
        sx={{
        mt:3,
        lineHeight:2
        }}
        >


        Amaro Rocche dei Roeri<br/>

        Farmacia Baldissero del Dott. Cavallero Giuseppe<br/>

        Piazza Martiri 16<br/>

        Baldissero d'Alba (CN)<br/>

        0172 40082<br/>

        amaro.rocchedeiroeri@yahoo.com


        </Typography>


        </Box>


    );


}