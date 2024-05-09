import { Box, Typography, Button } from "@mui/material";
import { Link } from "@remix-run/react";
import ContactCards from "~/src/components/Contact/contactCards";

export default function Privacy(){
    return(
        <>
            <Box sx={{pt: '1rem', textAlign:'center'}}>
                <Button variant="outlined" color="primary" component={Link} to="/">Home</Button>
                <Typography variant="h2">Privacy Policy</Typography>
            </Box>
            
            <Box sx={{px:'2rem'}}>
                <h1>Purpose</h1>
                <p>The purpose of this privacy policy is to explain how and when we collect personal information, what we do with it, and your right to see or change it.</p>
                <p>Other than personal information, which is covered under the privacy policy, any material you send to us through this website is considered non-confidential.</p>
                <h1>Collection, storage and use of personal information</h1>
                <h2>No need to disclose personal information</h2>
                <p>You may choose to disclose personal information to us when you fill in any forms on this website. 
                    This information can be viewed by website administrators, and our staff, or contractors who work for us. 
                    Therefore we recommend you don’t send any sensitive personal information in submission forms.
                </p>
                <h2>Holding of information</h2>
                <p>If you provide personal information, it is held by us indefinitely. We do not sell, publish or give away any customer contact information or personal details of any kind to other parties.</p>
                <p>At our sole discretion, we reserve the right to disclose information to law enforcement or other government officials if it is demanded in connection with an investigation of fraud, intellectual property infringements, or other activity that is illegal or may expose us to legal liability.</p>
                <h2>Use of personal information</h2>
                <p>We'll only use personal information provided to us for the purpose of:</p>
                <ul>
                    <li>communicating with you, including, for example, responding to your request for information or a quote</li>
                    <li>sending you the occasional newsletter about our business services</li>
                    <li>improving the website, and/or improving our services</li>
                </ul>
                <h1>Statistical information and cookies</h1>
                <h2>Statistical information collected</h2>
                <p>We may collect statistical information about your visit to help us improve this website. This information is aggregated and doesn't identify you personally. It may include:</p>
                <ul>
                    <li>the search terms you used</li>
                    <li>the pages you visited on our website and the links you clicked on</li>
                    <li>the date and time you visited the website</li>
                    <li>the referring website (if any) from which you clicked through to this website</li>
                    <li>your operating system, for example Windows 10, Mac OS X</li>
                    <li>The type of web browser you use, such as Internet Explorer, Chrome or Mozilla</li>
                    <li>other things like your screen resolution and the language setting of your browser</li>
                </ul>
                <h2>Use of  statistical information</h2>
                <p>The statistical information referred to above can be viewed by us and our website provider, and be used to improve our website and/or overall website services.</p>
                <h2>Cookies</h2>
                <p>This website generates session cookies for the purpose of monitoring website usage. The cookies don't collect personal information. You can disable them or clear them out of your web browser without affecting your ability to use the website.</p>
                <h1>Correcting your personal informaion</h1>
                <h2>Your rights</h2>
                <p>Under the Privacy Act 2020, you have the right to access and ask us to correct or delete any of your personal information provided to us in connection with your use of this website. Contact us if:</p>
                <ul>
                    <li>you would like to see or change your personal information</li>
                    <li>you have any concerns regarding your privacy</li>
                </ul>
                <h1>Who to contact</h1>
                <p>If you have any privacy concerns, contact us at:</p>
                <ContactCards showText={false}/>
                <Box sx={{textAlign: 'center'}}>
                    <Button variant="outlined" color="primary" component={Link} to="/">Home</Button>
                </Box>
            </Box>
        </>
    );
}