import { Box } from "@mui/material";
import Footer from "./components/Footer/copyright";
import Banner from "./components/Banner/banner";
import Menu from "./components/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <Box> 
        <Banner />
        {/* <Menu /> */}
        {children}
        <Footer />
      </Box>
    );
  }