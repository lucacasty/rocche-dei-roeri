import {

Container,
Box

} from "@mui/material";


import HeroSlider

from "../../sections/Hero/HeroSlider";


import About

from "../../sections/About/About";


import Products

from "../../sections/Products/ProductsSection";

import Contact

from "../../sections/Contact/Contact";



export default function Home(){


  return (

    <>

      <HeroSlider />

      <Container maxWidth="lg">

      <Box id="chi-siamo">

      <About />

      </Box>

      <Products />

      <Box id="contatti">

      <Contact />

      </Box>

      </Container>

    </>


  );


}