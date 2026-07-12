import {

Container,
Typography,
Box

} from "@mui/material";



export default function Privacy(){


  return (

      <Container

      maxWidth="md">


      <Box

      sx={{

      py:10

      }}

      >


      <Typography

      variant="h2"

      fontWeight={700}

      gutterBottom

      >

      Privacy Policy

      </Typography>



      <Typography

      lineHeight={2}

      >


      Informativa sul trattamento dei dati personali
      ai sensi del Regolamento Europeo 679/2016.


      <br/><br/>


      I dati personali forniti dall'utente attraverso
      il modulo di contatto saranno utilizzati
      esclusivamente per rispondere alle richieste
      relative ai prodotti Amaro Rocche dei Roeri.


      <br/><br/>


      Il titolare del trattamento è:

      <br/>

      Farmacia Baldissero del Dott. Cavallero Giuseppe.


      <br/><br/>


      L'utente può richiedere in qualsiasi momento
      la modifica o cancellazione dei propri dati.


      </Typography>


      </Box>


      </Container>


    );


}