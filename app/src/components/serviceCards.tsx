import { Box, Card, Stack, Typography } from "@mui/material";
import theme from "../mui/theme";

export default function ServiceCards(){
    return(
        <Box sx={{ 
                p: 2, 
                // border: '1px dashed grey',
                height: "100%",
                textAlign: 'center'
                }}>
            <Typography variant="h3">Our Services</Typography>
            <Stack direction='row' spacing={2}>
                <Card sx={{ backgroundColor: theme.palette.secondary.main, width: '50%', textAlign: 'center'}}>
                    <h1>Window Repair</h1>
                    <p id="content2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos amet necessitatibus corrupti corporis accusantium quam vitae in id fuga expedita quibusdam rerum, quia doloremque quo optio nemo velit beatae dolor.</p>
                </Card>
                <Card sx={{backgroundColor: theme.palette.secondary.main, width: '50%', textAlign: 'center'}}>
                    <h1>WOF Certified</h1>
                    <p id="content2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos amet necessitatibus corrupti corporis accusantium quam vitae in id fuga expedita quibusdam rerum, quia doloremque quo optio nemo velit beatae dolor.</p>
                </Card>
                <Card sx={{backgroundColor: theme.palette.secondary.main, width: '50%', textAlign: 'center'}}>
                    <h1>Quality Assurance</h1>
                    <p id="content2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos amet necessitatibus corrupti corporis accusantium quam vitae in id fuga expedita quibusdam rerum, quia doloremque quo optio nemo velit beatae dolor.</p>
                </Card>
            </Stack>
        </Box>
    );
}