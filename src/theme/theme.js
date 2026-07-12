import {

  createTheme

} from "@mui/material/styles";



const theme = createTheme({

  palette: {

    primary: {

      main: "#355834"

    },


    secondary: {

      main: "#C49A32"

    },


    background: {

      default: "#F8F5ED"

    }

  },



  typography: {


    fontFamily:

      "Montserrat, Arial, sans-serif",


    h1: {

      fontWeight: 800

    },


    h2: {

      fontWeight: 700

    },


    h3: {

      fontWeight: 700

    }

  },



  shape: {

    borderRadius: 12

  },



  components: {


    MuiButton: {


      styleOverrides: {


        root: {


          textTransform: "none",

          fontWeight: 700,

          borderRadius: 30


        }


      }


    },



    MuiCard: {


      styleOverrides: {


        root: {


          boxShadow:
            "0 10px 30px rgba(0,0,0,.08)"


        }


      }


    }


  }



});


export default theme;