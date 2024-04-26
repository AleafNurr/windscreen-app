import { Box, Container, Typography, Link } from "@mui/material";

function Copyright(){
    return (
        <Typography variant='body2' color='black'>
            {'Copyright © '}
            <Link color='inherit' href='https://mui.com/'>
                Mercury Bay Glass & Windscreens
            </Link>
            {' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function Footer(){
    return(
        <Container sx={{
            textAlign: 'center'
        }}>
            <Box sx={{
                margin: '2rem'
            }}>
                <Copyright />
            </Box>
        </Container>
    );
}