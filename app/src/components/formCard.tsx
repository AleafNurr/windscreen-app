import { Box, Typography, Card  } from "@mui/material";
import theme from "../mui/theme";
import Form from "./form";

export default function FormCard(){
    return(
        <Box sx={{
            backgroundColor: theme.palette.success.light, // placholder green
            // border: '1px dashed grey',
            textAlign: 'center',
            paddingTop: '2rem',
            paddingBottom: '2rem',
        }}>
            <Card sx={{
                // border: '1px dashed grey',
                maxWidth: '50%',
                margin: '0 auto', // center the box horizontally
                marginTop: '1rem',
                marginBottom: '1rem',
                padding: '1rem'
            }}>
                <Typography variant="h3">Get A Free Quote</Typography>
                <Form />
            </Card>
        </Box>
    );
}