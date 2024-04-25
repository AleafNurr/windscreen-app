import { Box, Typography, Card, useMediaQuery, useTheme  } from "@mui/material";
import theme from "../mui/theme";
import Form from "./form";

export default function FormCard() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            sx={{
                backgroundColor: theme.palette.success.light,
                textAlign: 'center',
                paddingTop: '2rem',
                paddingBottom: '2rem',
            }}
        >
            <Card
                sx={{
                    padding: '2rem',
                    borderRadius: 2,
                    width: isMobile ? '80%' : '50%',
                    margin: '0 auto',
                }}
            >
                <Typography variant="h3">Get A Free Quote</Typography>
                <Form />
            </Card>
        </Box>
    );
}