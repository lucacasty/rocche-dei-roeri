import {

    Box,
    Typography

} from "@mui/material";


export default function Contact() {


    return (

        <Box

            sx={{

                py: 5,

            }}

        >


            <Typography
                variant="h3"
                align="center"
                gutterBottom
            >

                Contatti

            </Typography>



            <Typography
                sx={{
                    lineHeight: 2
                }}
                align="center"
            >


                Per info e Ordini : amaro.rocchedeiroeri@yahoo.com<br />

                Farmacia Baldissero del Dott. Cavallero Giuseppe<br />

                Piazza Martiri 16<br />

                Baldissero d'Alba (CN)<br />

                0172 40082<br />

            </Typography>


        </Box>


    );


}