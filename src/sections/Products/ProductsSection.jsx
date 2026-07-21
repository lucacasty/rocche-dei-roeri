import {

    Box,
    Grid,
    Typography

} from "@mui/material";

import ProductCard from "../../components/ui/ProductCard";
import productData from "../../data/products";

export default function ProductsSection() {



    return (

        <Box
            sx={{
                py: 5
            }}
        >


            <Typography
                variant="h3"
                align="center"
                gutterBottom
            >

                I nostri prodotti

            </Typography>



            <Grid
                container
                spacing={4}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 2
                }}
            >


                {
                    productData.map((product) => (


                        <Grid
                            item
                            xs={12}
                            md={6}
                            key={product.name}
                        >

                            <ProductCard
                                title={product.name}
                                image={product.image}
                                description={product.description}
                                link={product.path}
                            />

                        </Grid>


                    ))
                }



            </Grid>


        </Box>


    );


}