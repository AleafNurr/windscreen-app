import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import logo from "~/src/assets/Logo-draft-.png";

export default function Banner(){
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // this MUI hook returns true if the screen width is less than 600px
    return(
        <Box sx={{ 
            backgroundImage: 'linear-gradient(130deg, rgba(2,0,36,1) 0%, rgba(45,45,126,1) 39%, rgba(0,212,255,1) 100%)',
            height: '25vh',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <img src={logo} alt="logo" style={{ 
                width: isMobile ? '75%' : '100%',
                height: isMobile ? '75%' : '100%', 
                objectFit: 'contain'
            }}/>
        </Box>
    );
}