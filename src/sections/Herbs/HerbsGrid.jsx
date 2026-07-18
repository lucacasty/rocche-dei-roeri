import { useEffect, useState } from "react";

import {
    Typography,
    Box,
    IconButton,
    useTheme,
    useMediaQuery
} from "@mui/material";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import HerbCard from "../../components/ui/HerbCard";

import herbData from "../../data/herbs";

export default function HerbsGrid() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const itemsPerView = isMobile ? 1 : 3;
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = window.setInterval(() => {
            setActiveIndex((current) => (current + 1) % herbData.length);
        }, 4000);

        return () => window.clearInterval(interval);
    }, []);

    const handleNext = () => {
        setActiveIndex((current) => (current + 1) % herbData.length);
    };

    const handlePrev = () => {
        setActiveIndex((current) => (current - 1 + herbData.length) % herbData.length);
    };

    const visibleHerbs = Array.from({ length: itemsPerView }, (_, index) => {
        const herb = herbData[(activeIndex + index) % herbData.length];
        return herb;
    });

    return (
        <Box
            sx={{
                pt: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%"
            }}
        >
            <Typography
                variant="h3"
                align="center"
                gutterBottom
            >
                Le erbe della miscela
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    gap: 1,
                    mb: 3
                }}
            >
                <IconButton
                    onClick={handlePrev}
                    aria-label="Erbe precedenti"
                    sx={{
                        border: "1px solid",
                        borderColor: "divider",
                        bgcolor: "background.paper"
                    }}
                >
                    <ChevronLeftIcon />
                </IconButton>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "stretch",
                        gap: { xs: 2, md: 3 },
                        width: "100%",
                        overflow: "hidden"
                    }}
                >
                    {visibleHerbs.map((herb, index) => (
                        <Box
                            key={`${herb.title}-${activeIndex}-${index}`}
                            sx={{
                                width: { xs: "100%", md: "calc(33.333% - 16px)" },
                                flex: { xs: "0 0 100%", md: "0 0 calc(33.333% - 16px)" },
                                maxWidth: { xs: 360, md: 320 }
                            }}
                        >
                            <HerbCard {...herb} />
                        </Box>
                    ))}
                </Box>

                <IconButton
                    onClick={handleNext}
                    aria-label="Erbe successive"
                    sx={{
                        border: "1px solid",
                        borderColor: "divider",
                        bgcolor: "background.paper"
                    }}
                >
                    <ChevronRightIcon />
                </IconButton>
            </Box>
        </Box>
    );
}