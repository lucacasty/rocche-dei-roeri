import {

  Box,
  Typography,
  Link

} from "@mui/material";

import { useTheme } from "@mui/material/styles";



export default function Footer() {
  const theme = useTheme();

  return (

    <Box

      component="footer"

      sx={{

        background: theme.palette.primary.main,

        color: "#fff",

        py: 5,

        mt: 8

      }}

    >



      <Typography

        textAlign="center"

        variant="h6"

        fontWeight={700}

        sx={{

          mt: 3,
          ml: 5

        }}

      >

        Amaro Rocche dei Roeri

      </Typography>

      <Typography

        textAlign="center"

        sx={{

          mt: 3,
          ml: 5

        }}

      >


        <Link

          href="/privacy"

          color="inherit"

          underline="hover"

        >

          Privacy Policy

        </Link>


      </Typography>



      <Typography

        textAlign="center"

        sx={{

          mt: 3,

          ml: 5,

          opacity: .7

        }}

      >


        © {new Date().getFullYear()} Amaro Rocche dei Roeri

      </Typography>



    </Box>


  );


}