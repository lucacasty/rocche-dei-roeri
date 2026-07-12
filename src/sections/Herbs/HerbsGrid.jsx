import {
    Grid,
    Typography,
    Box
} from "@mui/material";

import HerbCard from "../../components/ui/HerbCard";

import herbData from "../../data/herbs";

export default function HerbsGrid() {

    return (

        <Box

            sx={{

                py: 8

            }}

        >

            <Typography

                variant="h3"

                align="center"

                mb={5}

            >

                Le erbe della miscela

            </Typography>

            <Grid

                container

                spacing={3}

            >
                {
                    herbData.map((herb) => (


                        <Grid

                            item

                            xs={12}

                            sm={6}

                            md={4}

                            key={herb.name}

                        >


                            <HerbCard

                                {...herb}

                            />


                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
}