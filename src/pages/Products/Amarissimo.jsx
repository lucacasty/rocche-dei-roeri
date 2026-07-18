import {

  Container,
  Typography,
  Box,
  Button

} from "@mui/material";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import {

  motion

} from "framer-motion";


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
          py: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}

      >
        <Typography

          variant="h3"

          align="center"

        >

          Amarissimo Rocche dei Roeri

        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            my: 4,
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
              src="/images/amaro.jpeg"
              alt="Amaro Rocche dei Roeri"
              sx={{
                display: "block",
                width: {
                  xs: "100%",
                  md: "50%"
                },
                flexShrink: 0
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
                  sx={{ width: "80%" }}
                  href="/ordina"
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <ShoppingCartIcon
                      sx={{
                        position: "absolute",
                      }}
                    />
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



        <RoccheSection />



      </Box>


    </Container>


  );


}