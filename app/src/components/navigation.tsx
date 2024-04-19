import { Box, Button, Stack } from "@mui/material";
import { Link } from "@remix-run/react";
import theme from "../mui/theme";

export default function Menu(){
    return(
        <Box sx={{
                width: '100%',
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: theme.palette.secondary.main
                }}>
            <Stack direction='row' spacing={2}>
                <Button component={Link} to="/" sx={{ color: 'black' }}>
                    Home
                </Button>
                <Button component={Link} to="/about" sx={{ color: 'black' }}>
                    About
                </Button>
            </Stack>
        </Box>
    );
}