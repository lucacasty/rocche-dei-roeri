import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Collapse,
  Box
} from "@mui/material";

import {
  useState
} from "react";

import {
  motion
} from "framer-motion";


export default function HerbCard({
  name,
  image,
  description
}){


const [open,setOpen]=useState(false);



    return (

        <Card

        component={motion.div}

        whileHover={{
        scale:1.05
        }}

        onClick={()=>setOpen(!open)}

        sx={{

        cursor:"pointer",
        height:"100%",
        borderRadius:4

        }}

        >


        <CardMedia

        component="img"

        height="180"

        image={image}

        alt={name}

        />



        <CardContent>


        <Typography
        variant="h6"
        fontWeight="700"
        >

        {name}

        </Typography>



        <Collapse
        in={open}
        >

        <Box
        sx={{
        mt:2
        }}
        >


        <Typography>

        {description}

        </Typography>


        </Box>

        </Collapse>


        </CardContent>


        </Card>


    );


}