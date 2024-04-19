import { Box } from "@mui/material";
import Footer from "./components/copyright";
import Banner from "./components/banner";
import Menu from "./components/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <Box> 
        <Banner />
        <Menu />
        {children}
        <Footer />
      </Box>
    );
  }