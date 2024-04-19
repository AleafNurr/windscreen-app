import { Box, Card, Stack, Typography } from "@mui/material";
import theme from "../mui/theme";

export default function ServiceCards(){

    return (
        <Box sx={{
            pt: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Typography variant="h3">Our Services</Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{
                    p: 2,
                }}>
                    <Card sx={{ backgroundColor: theme.palette.secondary.main, textAlign: 'center' }}>
                        <h1>Windscreen Repair</h1>
                        <p id="content2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos amet necessitatibus corrupti corporis accusantium quam vitae in id fuga expedita quibusdam rerum, quia doloremque quo optio nemo velit beatae dolor.</p>
                    </Card>
                    <Card sx={{ backgroundColor: theme.palette.secondary.main, textAlign: 'center' }}>
                        <h1>WOF Certified</h1>
                        <p id="content2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos amet necessitatibus corrupti corporis accusantium quam vitae in id fuga expedita quibusdam rerum, quia doloremque quo optio nemo velit beatae dolor.</p>
                    </Card>
                    <Card sx={{ backgroundColor: theme.palette.secondary.main, textAlign: 'center' }}>
                        <h1>Quality Assurance</h1>
                        <p id="content2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos amet necessitatibus corrupti corporis accusantium quam vitae in id fuga expedita quibusdam rerum, quia doloremque quo optio nemo velit beatae dolor.</p>
                    </Card>
                </Stack>
        </Box>
    );
}