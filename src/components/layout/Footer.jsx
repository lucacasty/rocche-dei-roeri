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
        background: theme.palette.background.contrast,
        color: "#fff",
        py: 2,
        mt: 8,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: {xs: "column", md: "row"},
        gap: 2,
      }}

    >

      <Box>

      <Typography

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

        sx={{

          mt: 3,
          ml: 5

        }}

      >


        <Link

          href="/condizioni"

          color="inherit"

        >

          Condizioni di vendita

        </Link>


      </Typography>

      <Typography

        sx={{

          mt: 3,
          ml: 5

        }}

      >


        <Link

          href="/privacy"

          color="inherit"

        >

          Privacy Policy

        </Link>


      </Typography>



      <Typography

        sx={{

          mt: 3,

          ml: 5,

          opacity: .7

        }}

      >


        © {new Date().getFullYear()} Amaro Rocche dei Roeri

      </Typography>

      </Box>

      <Box
        as="img"
        src="/images/logo-footer.jpeg"
        sx={{
          height: 200,
          mx: 5,
        }}
      >
      </Box>

    </Box>


  );


}