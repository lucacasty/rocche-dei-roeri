import {
  Box,
  Container,
  Typography
} from "@mui/material";

import HeroSlider from "../../sections/Hero/HeroSlider";
import Products from "../../sections/Products/ProductsSection";
import Contact from "../../sections/Contact/Contact";

const aboutHeroSlides = [
  { image: "/images/fiera.jpeg" },
  { image: "/images/stand.jpeg" }
];

const herbSlides = [
  //{ image: "/images/erba1.jpeg" },
  { image: "/images/erba2.jpeg" },
  { image: "/images/erba4.jpeg" },
  { image: "/images/erba8.jpeg" },
  { image: "/images/erba9.jpeg" },
  { image: "/images/erba6.jpeg" },
  { image: "/images/erba10.jpeg" },
  { image: "/images/erba5.jpeg" },
  { image: "/images/erba11.jpeg" },
  { image: "/images/erba7.jpeg" },
];

export default function About() {
  return (
    <>
      <HeroSlider slides={aboutHeroSlides} showButton={false} showText={false} />

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }} align="center">
        <Box id="chi-siamo" sx={{ mb: { xs: 5, md: 7 } }}>
          <Typography variant="body1" sx={{ lineHeight: 1.8, color: "text.secondary" }}>
            L&apos;Amaro Rocche dei Roeri nasce da uno studio sulle erbe del territorio e loro utilizzi salutistici ad opera del Farmacista di Baldissero d&apos;Alba, che ha creato le due miscele da cui nascono l&apos;amaro e l&apos;amarissimo. Questi amari sono prodotti artigianali che coniugano il sapere dello speziale con la capacità di allestire preparazioni tipiche della tradizione dei farmacisti. Le ricette sono state poi brevettate e la produzione è affidata a una distilleria artigianale.
          </Typography>
        </Box>

        <Box sx={{ mb: { xs: 5, md: 7 } }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600, color: "text.primary" }}>
            L&apos;Amaro Rocche dei Roeri
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8, color: "text.secondary" }}>
            L&apos;Amaro Rocche dei Roeri è digestivo dal gusto amabile con un piacevole aroma. Può essere bevuto liscio o con ghiaccio come digestivo o aperitivo, ma viene anche utilizzato come correttivo per il caffè o come punch con acqua calda.
          </Typography>
        </Box>

        <Box sx={{ mb: { xs: 5, md: 7 } }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600, color: "text.primary" }}>
            Le erbe che lo compongono
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8, color: "text.secondary", mb: 3 }}>
            Nell&apos;Amaro ci sono sette erbe note per le loro proprietà digestive e stimolanti dell&apos;appetito. Inoltre hanno un effetto eupeptico favorendo le secrezioni dello stomaco e colagogo-coleretico, stimolando la produzione di bile. Hanno anche un benefico effetto sulla mucosa dell&apos;intestino e sul gonfiore post-prandiale, oltre a un&apos;azione depurativa a livello del fegato.
          </Typography>
          <HeroSlider slides={herbSlides} showButton={false} showText={false} height={{ xs: "30vh", md: "40vh" }} />
        </Box>

      </Container>
    </>
  );
}
