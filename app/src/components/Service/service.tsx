import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import theme from "../../mui/theme";

import backgroundImageLarge from "./assets/bg-asset-large.jpg";
import backgroundImageSmall from "./assets/bg-asset-small.jpg";

import ServiceCards from "./serviceCards";

export default function Service(){
    const screenTheme = useTheme();
    const isMobile = useMediaQuery(screenTheme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(screenTheme.breakpoints.down('md'));

    return (
        <Box sx={{
            pt: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: {
                xs: `url(${backgroundImageSmall})`,
                sm: `url(${backgroundImageSmall})`,
                md: `url(${backgroundImageLarge})` 
            },
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
        }}>
            {
            isMobile ? (<Typography variant="h3" sx={{color: 'black' }}>Our Services</Typography>) : 
            isTablet ? (<Typography variant="h2" sx={{color: 'black'}}>Our Services</Typography>) : 
            (<Typography variant="h1" sx={{color: 'black'}}>Our Services</Typography>)
            }
            <ServiceCards />
        </Box>
    );
}