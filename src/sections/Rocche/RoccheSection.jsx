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
        py: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}

    >


      <Typography

        variant="h3"
        align="center"
        gutterBottom

      >

        Cosa sono le Rocche

      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "80%",
          alignItems: "center",
          gap: 4,
        }}
      >

        <Box

          component="img"

          src="/images/rocche.svg"

          alt="Le Rocche del Roero"

          sx={{
            borderRadius: 3,
            width: {
              xs: "100%",
              md: "70%"
            }
          }}

        >
        </Box>
        <Typography

          lineHeight={2}

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
      </Box>

    </Box>


  );


}