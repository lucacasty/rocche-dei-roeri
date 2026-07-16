import {
  Box,
  Typography,
  Container
} from "@mui/material";

import { motion } from "framer-motion";

export default function DisclaimerSection() {

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


        <Container

            item

            xs={12}

            md={6}


            container

            spacing={6}

            alignItems="center"
        >

            <Typography

            lineHeight={2}
            textAlign="center"

            >

            Bevi responsabilmente nei propri limiti personali in termini di
            quantità e frequenza di consumo, nonché con la consapevolezza
            dei momenti e delle circostanze in cui il consumo di alcol
            potrebbe risultare inappropriato o dannoso per la salute.
            <br></br>
            Vietato ai minori di 18 anni e in gravidanza

            </Typography>
        </Container>
    </Box>
  );
}