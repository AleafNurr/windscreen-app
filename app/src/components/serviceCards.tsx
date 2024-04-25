import { Box, Card, Stack, Typography, CardHeader, CardContent, useMediaQuery, useTheme } from "@mui/material";
import theme from "../mui/theme";

import backgroundImage from "../assets/bg-asset.png";

export default function ServiceCards(){
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box sx={{
            pt: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }}>
            {
            isMobile ? (<Typography variant="h3" sx={{color: 'white'}}>Our Services</Typography>) : 
            isTablet ? (<Typography variant="h2" sx={{color: 'white'}}>Our Services</Typography>) : 
            (<Typography variant="h1" sx={{color: 'white'}}>Our Services</Typography>)
            }
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ p: 2 }}>
                <Card sx={{ backgroundColor: 'white', textAlign: 'center' }}>
                    <CardHeader title="Windscreen Repair" sx={{ 
                        color: 'white',
                        backgroundColor: theme.palette.primary.main,
                        p: 1
                    }}/>
                    <CardContent >
                        We provide professional repair services for vehicle windscreens of all types and make, ensuring quality and reliability.
                    </CardContent>
                </Card>
                <Card sx={{ backgroundColor: 'white', textAlign: 'center' }}>
                    <CardHeader title="WOF Certified" sx={{
                        color: 'white',
                        backgroundColor: theme.palette.primary.main,
                        p: 1
                    }}/>
                    <CardContent>
                        We are certified to conduct Warrant of Fitness inspections, which are essential for vehicle safety and compliance.
                    </CardContent>
                </Card>
                <Card sx={{ backgroundColor: 'white', textAlign: 'center' }}>
                    <CardHeader title="Quality Assurance" sx={{
                        color: 'white',
                        backgroundColor: theme.palette.primary.main,
                        p: 1
                    }}/>
                    <CardContent>
                        We guarantee the quality of our work and ensure that all repairs are conducted to the highest standards.
                    </CardContent>
                </Card>
            </Stack>
        </Box>
    );
}