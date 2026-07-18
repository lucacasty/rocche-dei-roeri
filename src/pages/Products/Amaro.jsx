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


import HerbsGrid from "../../sections/Herbs/HerbsGrid";



export default function Amaro() {


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

          Amaro Rocche dei Roeri

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
                Amaro Rocche dei Roeri un esperienza sensoriale che vi
                porterà a fare un viaggio nelle colline del Roero.
                Una nota fresca iniziale del finocchio selvatico che vi
                introduce in una passeggiata nei boschi delle rocche, il
                sentore armonico della camomilla e le note di spezie del
                tarassaco e di scorza di limone della melissa, trasmettono
                armonia e serenità come la vista sulle colline ordinate con di
                vigne frutteti e paesini con torri e castelli, titolo alcolico
                25% vol.
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



        <HerbsGrid />



      </Box>


    </Container>


  );


}