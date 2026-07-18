import {
  Container,
  Typography,
  Box
} from "@mui/material";


import OrderForm

from "../../components/ui/OrderForm";



export default function Order(){


  return (

    <Container maxWidth="md">


    <Box

    sx={{

    py:10

    }}

    >


    <Typography

    variant="h2"

    align="center"

    fontWeight={700}

    gutterBottom

    >

    Ordina il tuo prodotto

    </Typography>



    <Typography

    align="center"

    sx={{

    mb:6

    }}

    >


    Compila il modulo per richiedere informazioni
    o ordinare Amaro Rocche dei Roeri.


    </Typography>



    <OrderForm />



    </Box>


    </Container>


  );


}