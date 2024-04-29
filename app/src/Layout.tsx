import { Box } from "@mui/material";
import Footer from "./components/Footer/copyright";
import Banner from "./components/Banner/banner";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <Box> 
        <Banner />
        {children}
        <Footer />
      </Box>
    );
  }