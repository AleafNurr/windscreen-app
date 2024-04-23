import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import logo from "~/src/assets/Logo-draft-3.png";

export default function Banner(){
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return(
        <Box sx={{ 
            backgroundColor: 'black',
            height: '30vh',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {/* <Typography variant="h1" sx={{ 
                color: 'white',
                fontSize: '4rem', // adjust the font size based on responsiveness
                '@media (max-width: 600px)': {
                    fontSize: '2rem',
                },
                '@media (max-width: 400px)': {
                    fontSize: '1.5rem',
                }
            }}>
                Mercury Bay Glass & Windscreens
            </Typography> */}
            <img src={logo} alt="logo" style={{ 
                width: isMobile ? '75%' : '100%',
                height: isMobile ? '75%' : '100%', 
                objectFit: 'contain'
            }}/>
        </Box>
    );
}