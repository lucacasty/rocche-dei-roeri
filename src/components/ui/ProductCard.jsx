import {

    Card,
    CardMedia,
    CardContent,
    Typography,
    Button

} from "@mui/material";


import {
    Link
} from "react-router-dom";


export default function ProductCard({

    title,
    image,
    description,
    link

}) {


    return (

        <Card

            sx={{

                height: "100%",

                borderRadius: 4

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
                        mt: 2
                    }}

                >

                    Scopri

                </Button>


            </CardContent>


        </Card>


    );


}