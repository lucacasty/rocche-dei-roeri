import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box
} from "@mui/material";

import {
  useState
} from "react";

import {
  motion
} from "framer-motion";


export default function HerbCard({
  latin,
  title,
  subtitle,
  img
}) {


  const [open, setOpen] = useState(false);



  return (

    <Card

      component={motion.div}

      whileHover={{
        scale: 1.05
      }}

      sx={{
        height: "100%",
        borderRadius: 4
      }}

    >

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "100%"
        }}
      >


        <CardMedia

          component="img"

          height="180"

          image={img}

          alt={title}

        />



        <CardContent>


          <Typography
            sx={{ fontStyle: 'italic' }}
          >

            {latin}

          </Typography>

          <Typography
            variant="h6"
            fontWeight={700}
          >

            {title}

          </Typography>


          <Typography>

            {subtitle}

          </Typography>

        </CardContent>

      </Box>


    </Card>


  );


}