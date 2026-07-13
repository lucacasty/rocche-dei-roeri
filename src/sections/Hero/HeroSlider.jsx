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
    image: "/images/hero-1.svg",
    title: "Amaro Rocche dei Roeri",
    subtitle:
      "Il gusto autentico delle colline del Roero"
  },


  {
    image: "/images/hero-2.svg",
    title: "Tradizione e natura",
    subtitle:
      "Erbe, fiori e radici selezionate"
  },


  {
    image: "/images/rocche.svg",
    title: "Le Rocche del Roero",
    subtitle:
      "Un territorio unico da scoprire"
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

                      maxWidth: 650,

                      color: "white"

                    }}


                  >


                    <Typography

                      variant="h1"

                      sx={{

                        fontSize: {
                          xs: "2.5rem",
                          md: "4.5rem"
                        },

                        fontWeight: 800

                      }}

                    >


                      {slide.title}


                    </Typography>



                    <Typography

                      variant="h5"

                      sx={{

                        mt: 3

                      }}

                    >

                      {slide.subtitle}

                    </Typography>



                    <Button

                      component={Link}

                      to="/products"

                      variant="contained"

                      sx={{

                        mt: 5,

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