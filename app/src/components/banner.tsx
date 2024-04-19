import { Box, Typography } from "@mui/material";

export default function Banner(){
    return(
        <Box sx={{ 
            backgroundColor: 'black',
        }}>
            <Typography variant="h1" sx={{ color: 'white' }}>Mercury Bay Glass & Windscreens</Typography>
        </Box>
    );
}