import {
  Box,
  Typography,
  Grid
} from "@mui/material";


import {
  motion
} from "framer-motion";



export default function RoccheSection() {


  return (

    <Box

      component={motion.section}

      initial={{
        opacity: 0,
        y: 30
      }}

      whileInView={{
        opacity: 1,
        y: 0
      }}

      viewport={{
        once: true
      }}

      sx={{

        py: 5

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
            align="center"
            gutterBottom

          >

            Cosa sono le Rocche

          </Typography>



          <Typography

            lineHeight={2}

            sx={{
              px: 5
            }}

            align="center"

          >


            Colline con pendii ripidi
            scoscesi con calanchi e
            canyon, frutto dell’erosione
            dell'acqua si sviluppano
            trasversalmente tagliando il
            territorio del Roero a meta
            partendo dai comuni di
            Pocapaglia fino a Cisterna
            d’Asti. Territorio che
            custodisce un importante
            biodiversità dal punto di
            vista delle speci vegetali.

          </Typography>


        </Grid>

        <Box

          component="img"

          src="/images/rocche.svg"

          alt="Le Rocche del Roero"

          sx={{

            width: "100%",

            px: 5,

            borderRadius: 3

          }}

        />



      </Grid>


    </Box>


  );


}