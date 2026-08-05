import { useState } from "react";

import {

  Container,
  Typography,
  Box,
  Button,
  Collapse

} from "@mui/material";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {

  motion

} from "framer-motion";


import HerbsImage from "../../sections/Herbs/HerbsImage";

import { useTheme } from "@mui/material/styles";



export default function Amarissimo() {

  const [showDetails, setShowDetails] = useState(false);
  const theme = useTheme();

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

          Amarissimo Rocche dei Roeri

        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: {
              xs: "100%",
              md: "80%"
            },
            gap: 3
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              flexDirection: {
                xs: "column",
                md: "row"
              },
              gap: 3
            }}
          >
            <Box
              component="img"
              src="/images/bottiglia-amarissimo.png"
              alt="Amaro Rocche dei Roeri"
              sx={{
                display: "block",
                width: {
                  xs: "40%",
                  md: "20%"
                },
                flexShrink: 0,
                p:2
              }}
            />

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 3,
                minWidth: { xs: "100%", md: 220 }
              }}
            >
              <Typography
                align="center"
                sx={{
                  lineHeight: 2,
                }}
              >
                Amarissimo Rocche dei Roeri, elisir dal gusto intenso nato dalla
                della miscela delle erbe del territorio: melissa malva camomilla
                cardo mariano tarassaco, rosa canina, finocchietto selvatico con la
                radice di genziana e il rabarbaro, ideale come digestivo per chi ama
                un sapore deciso senza compromessi, titolo alcolico 28% vol.
              </Typography>

                <Button
                  variant="contained"
                  sx={{
                    width: "80%",
                    background: theme.palette.background.button,
                    color: theme.palette.primary.main
                  }}
                  href="/ordina"
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <Box
                     sx={{
                      flexGrow: 1,
                      textAlign: "center",
                      fontSize: 20,
                      }}
                    >
                      Ordina ora
                    </Box>
                  </Box>
                  </Button>
            </Box>
          </Box>
        </Box>


        <Button
          color = "background"
          onClick={() => setShowDetails((prev) => !prev)}
          endIcon={
            <ExpandMoreIcon
              sx={{
                transform: showDetails ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.2s ease"
              }}
            />
          }
          sx={{ mt: 2, px: 3 }}
        >
          {showDetails ? "Nascondi" : "Le erbe che lo compongono"}
        </Button>

        <Collapse in={showDetails} timeout="auto" unmountOnExit>
          <HerbsImage image="erbe-amarissimo.png"/>
        </Collapse>

      </Box>


    </Container>


  );


}