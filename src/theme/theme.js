import {

  createTheme, responsiveFontSizes

} from "@mui/material/styles";



let theme = createTheme({

  palette: {

    primary: {

      main: "#FFF"

    },

    background: {

      default: "#7fb4bf2b",
      contrast: "#000",
      button: "green"

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

      fontWeight: 700,

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

theme = responsiveFontSizes(theme);


export default theme;