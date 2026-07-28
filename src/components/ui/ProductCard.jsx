import {

    Card,
    CardMedia,
    CardContent,
    Typography,
    Button

} from "@mui/material";

import { useTheme } from "@mui/material/styles";

import {
    Link
} from "react-router-dom";


export default function ProductCard({

    title,
    image,
    description,
    link

}) {

    const theme = useTheme();

    return (

        <Card

            sx={{

                height: "100%",

                borderRadius: 4,

                boxShadow: "0 10px 30px #000000a1",

                background: "#FFF"

            }}

        >


            <CardMedia

                component="img"

                height="500"

                image={image}

                alt={title}

            />


            <CardContent>


                <Typography
                    variant="h5"
                    fontWeight="700"
                >

                    {title}

                </Typography>



                <Typography
                    sx={{
                        mt: 2
                    }}
                >

                    {description}

                </Typography>



                <Button

                    component={Link}

                    variant="contained"

                    to={link}

                    sx={{
                        mt: 2,
                        fontSize: "1rem",
                        background: theme.palette.background.button,
                        color: theme.palette.primary.main
                    }}

                >

                    Scopri

                </Button>


            </CardContent>


        </Card>


    );


}