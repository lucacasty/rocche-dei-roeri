import {

  Container,
  Typography,
  Box,
  Button

} from "@mui/material";


import { motion } from "framer-motion";

import RoccheSection from "../../sections/Rocche/RoccheSection";

export default function Amarissimo() {


  return (

    <Container maxWidth="lg">


      <Box

        component={motion.div}

        initial={{

          opacity: 0

        }}

        animate={{

          opacity: 1

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

          Amarissimo Rocche dei Roeri

        </Typography>



        <Box

          component="img"

          src="/images/amaro.jpeg"

          alt="Amarissimo Rocche dei Roeri"

          sx={{

            display: "block",

            mx: "auto",

            my: 6,

            height: {

              xs: 400,

              md: 600

            }

          }}

        />



        <Typography

          textAlign="center"

          sx={{

            maxWidth: 900,

            mx: "auto",

            lineHeight: 2

          }}

        >

          Amarissimo Rocche dei Roeri, elisir dal gusto intenso nato dalla
          della miscela delle erbe del territorio: melissa malva camomilla
          cardo mariano tarassaco, rosa canina, finocchietto selvatico con la
          radice di genziana e il rabarbaro, ideale come digestivo per chi ama
          un sapore deciso senza compromessi, titolo alcolico 28% vol.

        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center"
          }}
        >

          <Button

            variant="contained"

            href="/ordina"

            sx={{

              width: "auto",

              mx: "auto",

              mt: 5,

              px: 7,

              py: 1,

              fontSize: 20,

            }}

          >

            Ordina ora

          </Button>

        </Box>




        <RoccheSection />

      </Box>


    </Container>


  );


}