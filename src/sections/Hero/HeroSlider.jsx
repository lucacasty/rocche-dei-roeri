import {
  Box,
  Typography,
  Button,
  Container
} from "@mui/material";


import {
  Swiper,
  SwiperSlide
} from "swiper/react";


import {
  Autoplay,
  EffectFade
} from "swiper/modules";


import {
  Link
} from "react-router-dom";


import "swiper/css";
import "swiper/css/effect-fade";



const slides = [


  {
    image: "/images/cristalliera.jpeg",
    title: "Amaro Rocche dei Roeri",
    subtitle:
      "Questo amaro prende il nome dalle rocche delle colline del Roero, fenomeno geologico di erosione, caratterizzato da profonde gole con pareti verticali."
  },


  {
    image: "/images/bottiglia-amaro-vetrina.jpeg",
    title: "Tradizione e natura",
    subtitle:
      "Su studio del farmacista di Baldissero d’Alba, che ispirandosi alle erbe che crescono spontanee nel territorio, ha formulato una ricetta di erbe, fiori, radici e bacche che dà vita a questo tipico amaro."
  },


  {
    image: "/images/rocche.png",
    title: "Le Rocche del Roero",
    subtitle:
      "Iidentità di un territorio aspro ma accogliente, ricco di preziosi tesori come il vino, il tartufo e la sapienza di chi da secoli coltiva queste colline con risultati eccellenti."
  }

];



export default function HeroSlider() {


  return (

    <Box
      className="hero-slider"
      sx={{
        height: {
          xs: "50vh",
          md: "70vh"
        }
      }}
    >



      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        slidesPerView={1}
        style={{
          height: "100%"
        }}



      >


        {

          slides.map((slide) => (


            <SwiperSlide key={slide.title} style={{ height: "100%" }}>


              <Box
                className="hero-slide-inner"
                sx={{
                  height: "100%",
                  width: "100%",
                  backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.65), rgba(0,0,0,.25)), url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >


                <Container>


                  <Box

                    sx={{

                      maxWidth: 800,

                      color: "white"

                    }}


                  >


                    <Typography

                      variant="h3"

                      sx={{
                        mb: {
                          xs: "1rem",
                          md: "0rem"
                        }
                      }}

                    >


                      {slide.title}


                    </Typography>



                    <Typography

                      variant="h6"

                    >

                      {slide.subtitle}

                    </Typography>



                    <Button

                      component={Link}

                      to="/products"

                      variant="contained"

                      sx={{

                        mt: 5,

                        fontSize: "1rem",

                        background: "#c49a32"

                      }}

                    >

                      Scopri

                    </Button>


                  </Box>


                </Container>


              </Box>



            </SwiperSlide>


          ))


        }



      </Swiper>

    </Box>


  );


}