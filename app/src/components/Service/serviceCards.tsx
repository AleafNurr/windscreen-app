import { Card, Stack, Typography, CardHeader, CardContent } from "@mui/material";
import theme from "../../mui/theme";

export default function ServiceCards(){

    return (
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ p: 2 }}>
            <Card sx={{ backgroundColor: 'white', textAlign: 'center' }}>
                <CardHeader title="Windscreen Repair" sx={{ 
                    color: 'white',
                    backgroundColor: theme.palette.primary.main,
                    p: 1
                }} />
                <CardContent >
                    <Typography variant="body1">
                    We provide professional repair services for vehicle windscreens of all types and make, ensuring quality and reliability.
                    </Typography>
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
    );
}