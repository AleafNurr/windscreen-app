import { Box, Card, Stack, Typography } from "@mui/material";
import theme from "../../mui/theme";

export default function ContactCards(){
    return(
        <Box sx={{ 
                pt: 2, 
                order: '1px dashed grey', 
                height: "100%",
                textAlign: 'center'
                }}>
            <Typography variant="h3">Contact Us</Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{margin: '2rem'}} alignItems="center">
                <Card sx={{ backgroundColor: theme.palette.secondary.light, width: '100%', textAlign: 'center'}}>
                    <h1>Phone</h1>
                    <p id="content2">12345678</p>
                </Card>
                <Card sx={{backgroundColor: theme.palette.secondary.light, width: '100%', textAlign: 'center'}}>
                    <h1>Email</h1>
                    <p id="content2">mercurybayglassandwindscreens@example.com</p>
                </Card>
                <Card sx={{backgroundColor: theme.palette.secondary.light, width: '100%', textAlign: 'center'}}>
                    <h1>Location</h1>
                    <p id="content2">879 Corriander Street, City, State, Country</p>
                </Card>
            </Stack>
        </Box>
    );
}