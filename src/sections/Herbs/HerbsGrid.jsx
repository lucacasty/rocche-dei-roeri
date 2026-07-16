import {
    Grid,
    Typography,
    Box
} from "@mui/material";

import HerbCard from "../../components/ui/HerbCard";

import herbData from "../../data/herbs";

export default function HerbsGrid() {

    const isOddCount = herbData.length % 2 !== 0;

    return (

        <Box

            sx={{

                pt: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center"

            }}

        >

            <Typography
                variant="h3"
                align="center"
                gutterBottom
            >

                Le erbe della miscela

            </Typography>

            <Grid

                container

                spacing={3}

                sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: { xs: "100%", md: "80%" },
                    mx: "auto"
                }}

            >
                {
                    herbData.map((herb, index) => (

                        <Grid

                            item

                            xs={12}
                            sm={6}
                            key={herb.title}
                            columnSpacing={2}
                            sx={{
                                width: { xs: "100%", sm: 320 }
                            }}
                        >

                            <Box sx={{ width: { xs: "100%", sm: 320 } }}>
                                <HerbCard

                                    {...herb}

                                />
                            </Box>

                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
}