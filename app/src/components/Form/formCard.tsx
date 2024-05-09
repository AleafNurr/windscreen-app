import { Box, Typography, Card, useMediaQuery, useTheme, Button  } from "@mui/material";
import { Link } from "@remix-run/react";
import theme from "../../mui/theme";
import Form from "./form";

import FormSVG from './assets/layered-waves-haikei.svg';
import CardSVGMedium from './assets/blob-scene-haikei-medium.svg';
import CardSVGLarge from './assets/blob-scene-haikei-large.svg';

export default function FormCard() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            sx={{
                // backgroundColor: theme.palette.success.light,
                backgroundImage: `url(${FormSVG})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                textAlign: 'center',
                paddingTop: '2rem',
                paddingBottom: '2rem',
            }}
        >
            <Card
                sx={{
                    backgroundColor: 'white',
                    backgroundImage: {
                        xs: `url(${CardSVGMedium})`,
                        sm: `url(${CardSVGMedium})`,
                        md: `url(${CardSVGLarge})`,
                        lg: `url(${CardSVGLarge})`,
                    },
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    pt: '2rem',
                    borderRadius: 2,
                    width: isMobile ? '80%' : '50%',
                    margin: '0 auto',
                    boxShadow: '-25px 25px 50px 2px #2DD5DD, 25px 0px 50px 2px #2DD5DD'
                }}
            >
                <Typography variant="h3">Get A Free Quote</Typography>
                <Form />
                <Button variant="text" color="primary" component={Link} to="/privacy">Privacy Policy</Button>
            </Card>
        </Box>
    );
}