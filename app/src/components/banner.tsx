import { Box, Typography } from "@mui/material";

export default function Banner(){
    return(
        <Box sx={{ 
            backgroundColor: 'black',
            height: '30vh',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Typography variant="h1" sx={{ 
                color: 'white',
                fontSize: '4rem', // adjust the font size based on responsiveness
                '@media (max-width: 600px)': {
                    fontSize: '2rem',
                },
                '@media (max-width: 400px)': {
                    fontSize: '1.5rem',
                }
            }}>Mercury Bay Glass & Windscreens</Typography>
        </Box>
    );
}